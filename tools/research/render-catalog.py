#!/usr/bin/env python3
"""Render deterministic bilingual source indexes without running reference code."""
from pathlib import Path
from collections import defaultdict
import argparse
import hashlib
import json
import os
import re

ROOT = Path(__file__).resolve().parents[2]
INVENTORY = ROOT / 'mapped/inventory'


def write_text(target, text):
    """Do not rewrite an existing file when its UTF-8 bytes already match."""
    data = text.encode('utf-8')
    if not target.exists() or target.read_bytes() != data:
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)


def relative(origin, target):
    return os.path.relpath(ROOT / target, origin.parent).replace(os.sep, '/')


def code(value):
    return '`' + str(value).replace('`', "'").replace('\n', ' ') + '`'


def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')


def module_dir(key):
    return key.replace('.ts', '-ts').replace('.js', '-js').replace('.mjs', '-mjs').replace('.cjs', '-cjs')


def source_link(origin, occurrence):
    line = occurrence['start_line']
    end = occurrence['end_line']
    label = occurrence['artifact'] + ':' + str(line) + '-' + str(end)
    return '[' + label + '](' + relative(origin, occurrence['path']) + '#L' + str(line) + '-L' + str(end) + ')'


def guide_for(key):
    checks = [
        ('automation', 'automations'), ('background-wake', 'background-wakes'), ('primary-bot', 'primary-bot'),
        ('memory', 'memory'), ('dream', 'memory'), ('subagent', 'subagents'), ('approval', 'approvals'),
        ('auto-review', 'approvals'), ('external-send', 'approvals'), ('inference', 'inference'),
        ('gateway', 'gateway'), ('transcript', 'transcripts'), ('scheduler', 'scheduling'),
        ('prompt', 'prompts'), ('skill', 'skills'), ('task', 'tasks'), ('browser', 'browser-computer'),
        ('computer', 'browser-computer'), ('playwright', 'browser-computer'), ('mcp', 'integrations'),
        ('turn-budget', 'budgets-recovery'), ('compaction', 'context-compaction'), ('summar', 'context-compaction'),
        ('telemetry', 'observability'), ('diagnostic', 'observability'), ('group', 'group-messaging'),
        ('tool', 'tools'), ('runner', 'turns'), ('worker', 'isolation'), ('agent-store', 'isolation')
    ]
    for needle, guide in checks:
        if needle in key:
            return 'guide/components/' + guide + '/README.md'
    return 'guide/architecture/README.md'


def render(language, symbols, modules, by_module, groups):
    """Only write or prune generated pages belonging to the selected language."""
    english = language == 'en'
    filename = 'README.en.md' if english else 'README.md'
    existing = {p for subdir in ('modules', 'functions') for p in (ROOT / 'mapped' / subdir).rglob(filename)}
    rendered = set()

    def t(portuguese, translated):
        return translated if english else portuguese

    def localized(path):
        return path[:-len('README.md')] + filename if path.endswith('README.md') else path

    def function_path(key, qualified):
        slug = re.sub(r'[^a-zA-Z0-9]+', '-', qualified).strip('-')[:80] or 'callable'
        digest = hashlib.sha256((key + '\0' + qualified).encode()).hexdigest()[:12]
        return 'mapped/functions/' + module_dir(key) + '/' + slug + '-' + digest + '/' + filename

    def save(target, lines):
        if english:
            lines[2:2] = ['[English](README.en.md) · [Português (Brasil)](README.md)', '']
        write_text(target, '\n'.join(lines))
        rendered.add(target)

    function_index = []
    for (key, qualified), occurrences in sorted(groups.items()):
        target_rel = function_path(key, qualified)
        target = ROOT / target_rel
        module_readme = 'mapped/modules/' + module_dir(key) + '/' + filename
        manual = localized(guide_for(key))
        lines = [
            '# ' + code(qualified), '',
            t('Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](',
              'Static reference for the original code. The complete flow and its conditions are explained in the [component guide](') + relative(target, manual) + ').', '',
            t('**Módulo:** ', '**Module:** ') + code(key) + t(' · [README do módulo](', ' · [Module README](') + relative(target, module_readme) + ')', '',
            t('## Implementação e entradas', '## Implementation and inputs'), '',
            t('| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |', '| Artifact and lines | Form | Async | Recovered parameters |'),
            '| --- | --- | --- | --- |'
        ]
        for item in occurrences:
            params = ', '.join(item['parameters']) or t('(nenhum)', '(none)')
            lines.append('| ' + source_link(target, item) + ' | ' + code(item['kind']) + ' | ' + (t('sim', 'yes') if item['async'] else t('não', 'no')) + ' | ' + safe(code(params)) + ' |')
        lines += ['', t('## Fluxo observado no corpo', '## Flow observed in the body'), '',
                  t('| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |', '| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |'),
                  '| --- | ---: | ---: | ---: | ---: | ---: | ---: |']
        for item in occurrences:
            c = item['control']
            lines.append('| ' + source_link(target, item) + ' | ' + ' | '.join(str(c[k]) for k in ('branches', 'loops', 'awaits', 'returns', 'throws', 'catches')) + ' |')
            if item.get('implicit_return'):
                lines += ['', t('A ocorrência em ', 'The occurrence at ') + item['artifact'] + ':' + str(item['start_line']) + t(' usa retorno implícito de arrow function.', ' uses an implicit arrow-function return.')]
        for item in occurrences:
            lines += ['', '### ' + item['artifact'] + ':' + str(item['start_line']), '']
            lines.append(t('Chamadas escritas diretamente neste corpo: ', 'Calls written directly in this body: ') + (', '.join(code(x) for x in item['calls']) if item['calls'] else t('nenhuma chamada identificável por nome', 'no calls identifiable by name')) + '.')
            if item['writes']:
                lines += ['', t('Alvos de atribuição ou incremento: ', 'Assignment or increment targets: ') + ', '.join(code(x) for x in item['writes']) + '.']
            if item['throw_targets']:
                lines += ['', t('Alvos de lançamento explícito: ', 'Explicit throw targets: ') + ', '.join(code(x) for x in item['throw_targets']) + '.']
            lines += ['', t('SHA-256 do trecho: ', 'SHA-256 of the source span: ') + code(item['body_sha256']) + '.']
        lines += ['', t('## Como interpretar', '## How to interpret this page'), '',
            t('Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.',
              'The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.'), '',
            t('[Método e limites do catálogo](', '[Catalog method and limitations](') + relative(target, localized('guide/methodology/README.md')) + ').', ''
        ]
        save(target, lines)
        function_index.append({'module': key, 'qualified_name': qualified, 'readme': target_rel, 'occurrences': [x['id'] for x in occurrences]})

    module_index = []
    for module in modules:
        key = module['id']
        target_rel = 'mapped/modules/' + module_dir(key) + '/' + filename
        target = ROOT / target_rel
        entries = sorted({s['qualified_name'] for s in by_module[key]})
        lines = ['# ' + code(key), '',
            t('Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.',
              'Map of the module identified in the original files. Each named function has its own reference page, with inputs, calls, syntactic mutations, and source links.'), '',
            t('[Guia funcional](', '[Functional guide](') + relative(target, localized(guide_for(key))) + t(') · [Índice geral](', ') · [General index](') + relative(target, localized('mapped/README.md')) + ')', '',
            t('## Seções de origem', '## Source sections'), '', t('| Artefato | Trecho |', '| Artifact | Source span |'), '| --- | --- |']
        for section in module['sections']:
            lines.append('| ' + section['artifact'] + ' | ' + source_link(target, section) + ' |')
        lines += ['', t('## Funções nomeadas', '## Named functions'), '']
        if entries:
            lines += [t('| Função ou método | Ocorrências | README |', '| Function or method | Occurrences | README |'), '| --- | ---: | --- |']
            for name in entries:
                lines.append('| ' + safe(code(name)) + ' | ' + str(len(groups[(key, name)])) + t(' | [Funcionamento estático](', ' | [Static behavior](') + relative(target, function_path(key, name)) + ') |')
        else:
            lines += [t('Esta seção não contém função nomeada no recorte selecionado. Pode conter constantes, schemas, tipos compilados ou inicialização. Consulte o código apontado acima.',
                        'This section contains no named function within the selected scope. It may contain constants, schemas, compiled types, or initialization. See the code linked above.')]
        lines += ['', t('## Escopo', '## Scope'), '',
            t('Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.',
              'Modules follow source markers present in the bundles. The same source may have several sections, and the host and runner may contain different implementations or only declarations. This page does not reconstruct missing TypeScript imports, development files, or deployment configuration.'), '']
        save(target, lines)
        module_index.append({'module': key, 'readme': target_rel, 'functions': len(entries), 'sections': len(module['sections'])})

    # Preserve the existing inventory schema and Portuguese paths byte-for-byte.
    # English pages use the same language-neutral AST facts and source identities.
    if not english:
        page_groups = defaultdict(list)
        for item in function_index:
            page_groups[item['module'].split('/')[0]].append(item)
        page_shards = []
        for category, items in sorted(page_groups.items()):
            rel = 'mapped/inventory/function-pages/' + category + '.json'
            write_text(ROOT / rel, json.dumps(items, ensure_ascii=False, separators=(',', ':')) + '\n')
            page_shards.append({'domain': category, 'path': rel, 'count': len(items)})
        write_text(INVENTORY / 'function-pages.json', json.dumps({'schema': 1, 'functions': len(function_index), 'shards': page_shards}, ensure_ascii=False, indent=2) + '\n')
        write_text(INVENTORY / 'module-pages.json', json.dumps(module_index, ensure_ascii=False, separators=(',', ':')) + '\n')

    categories = defaultdict(list)
    for item in module_index:
        categories[item['module'].split('/')[0]].append(item)
    index = ROOT / 'mapped' / filename
    lines = ['# Mapped reference', '',
        t('Catálogo navegável dos arquivos originais: **', 'Navigable catalog of the original files: **') + str(len(modules)) + t(' módulos**, **', ' modules**, **') + str(len(groups)) + t(' fichas de funções nomeadas**, **', ' named-function reference pages**, **') + str(len(symbols)) + t(' ocorrências** nos bundles analisados.', ' occurrences** in the analyzed bundles.'), '',
        t('Comece pelo [guia completo](../guide/README.md) para entender o funcionamento. Use este catálogo para ir de uma responsabilidade até cada implementação, sem misturar os dois bundles.',
          'Start with the [complete guide](../guide/README.en.md) to understand the behavior. Use this catalog to move from a responsibility to each implementation, keeping the two bundles distinct.'), '',
        t('A geração é estática e determinística. Não executa os arquivos originais. Callbacks sem nome não recebem ficha; definições e métodos nomeados, inclusive internos, recebem. As ocorrências preservam artefato e linha. [Método e limites](../guide/methodology/README.md).',
          'Generation is static and deterministic. It does not execute the original files. Unnamed callbacks do not receive pages; named definitions and methods, including nested ones, do. Occurrences preserve their artifact and line. [Method and limitations](../guide/methodology/README.en.md).'), '',
        t('## Inventários', '## Inventories'), '',
        t('- [Arquivos originais e hashes](inventory/original-files.json)', '- [Original files and hashes](inventory/original-files.json)'),
        t('- [Módulos e intervalos](inventory/modules.json)', '- [Modules and source ranges](inventory/modules.json)'),
        t('- [Funções e detalhes de AST](inventory/symbols.json)', '- [Functions and AST details](inventory/symbols.json)'),
        t('- [Métricas e arquivos analisados](inventory/analysis.json)', '- [Metrics and analyzed files](inventory/analysis.json)'),
        t('- [Índice das fichas de funções](inventory/function-pages.json)', '- [Function-page index](inventory/function-pages.json)'), '',
        t('## Módulos por domínio', '## Modules by domain'), '']
    for category, items in sorted(categories.items()):
        lines += ['### ' + category, '', t('| Módulo | Funções agrupadas |', '| Module | Grouped functions |'), '| --- | ---: |']
        for item in items:
            lines.append('| [' + safe(item['module']) + '](' + relative(index, item['readme']) + ') | ' + str(item['functions']) + ' |')
        lines.append('')
    save(index, lines)

    # Pruning one language must never remove the other language or hand-written files.
    for obsolete in sorted(existing - rendered):
        obsolete.unlink()
    print('Rendered', len(modules), 'module READMEs and', len(groups), 'function READMEs (' + language + ').')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--language', choices=('all', 'pt-BR', 'en'), default='all',
                        help='Languages to render (default: all). English-only rendering leaves Portuguese files and inventories untouched.')
    args = parser.parse_args()
    symbols = json.loads((INVENTORY / 'symbols.json').read_text(encoding='utf-8'))
    if isinstance(symbols, dict):
        symbols = [item for shard in symbols['shards'] for item in json.loads((ROOT / shard['path']).read_text(encoding='utf-8'))]
    modules = json.loads((INVENTORY / 'modules.json').read_text(encoding='utf-8'))
    by_module = defaultdict(list)
    groups = defaultdict(list)
    for symbol in symbols:
        by_module[symbol['module']].append(symbol)
        groups[(symbol['module'], symbol['qualified_name'])].append(symbol)
    for language in ('pt-BR', 'en') if args.language == 'all' else (args.language,):
        render(language, symbols, modules, by_module, groups)


if __name__ == '__main__':
    main()
