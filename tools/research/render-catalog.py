#!/usr/bin/env python3
"""Render deterministic source indexes. Reads metadata only; never runs references."""
from pathlib import Path
from collections import defaultdict
import hashlib
import json
import os
import re
import shutil

ROOT = Path(__file__).resolve().parents[2]
INVENTORY = ROOT / 'mapped/inventory'
symbols = json.loads((INVENTORY / 'symbols.json').read_text())
if isinstance(symbols, dict):
    symbols = [item for shard in symbols['shards'] for item in json.loads((ROOT / shard['path']).read_text())]
modules = json.loads((INVENTORY / 'modules.json').read_text())
analysis = json.loads((INVENTORY / 'analysis.json').read_text())
by_module = defaultdict(list)
groups = defaultdict(list)
for symbol in symbols:
    by_module[symbol['module']].append(symbol)
    groups[(symbol['module'], symbol['qualified_name'])].append(symbol)

def relative(origin, target):
    return os.path.relpath(ROOT / target, origin.parent).replace(os.sep, '/')

def code(value):
    return '`' + str(value).replace('`', "'").replace('\n', ' ') + '`'

def safe(value):
    return str(value).replace('|', '\\|').replace('\n', ' ')

def module_dir(key):
    return key.replace('.ts', '-ts').replace('.js', '-js').replace('.mjs', '-mjs').replace('.cjs', '-cjs')

def function_path(key, qualified):
    slug = re.sub(r'[^a-zA-Z0-9]+', '-', qualified).strip('-')[:80] or 'callable'
    digest = hashlib.sha256((key + '\0' + qualified).encode()).hexdigest()[:12]
    return 'mapped/functions/' + module_dir(key) + '/' + slug + '-' + digest + '/README.md'

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

for subdir in ('modules', 'functions'):
    target = ROOT / 'mapped' / subdir
    if target.exists():
        shutil.rmtree(target)
    target.mkdir(parents=True)

function_index = []
for (key, qualified), occurrences in sorted(groups.items()):
    target_rel = function_path(key, qualified)
    target = ROOT / target_rel
    target.parent.mkdir(parents=True, exist_ok=True)
    module_readme = 'mapped/modules/' + module_dir(key) + '/README.md'
    manual = guide_for(key)
    lines = [
        '# ' + code(qualified), '',
        'Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](' + relative(target, manual) + ').', '',
        '**Módulo:** ' + code(key) + ' · [README do módulo](' + relative(target, module_readme) + ')', '',
        '## Implementação e entradas', '',
        '| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |',
        '| --- | --- | --- | --- |'
    ]
    for item in occurrences:
        params = ', '.join(item['parameters']) or '(nenhum)'
        lines.append('| ' + source_link(target, item) + ' | ' + code(item['kind']) + ' | ' + ('sim' if item['async'] else 'não') + ' | ' + safe(code(params)) + ' |')
    lines += ['', '## Fluxo observado no corpo', '', '| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |', '| --- | ---: | ---: | ---: | ---: | ---: | ---: |']
    for item in occurrences:
        c = item['control']
        lines.append('| ' + source_link(target, item) + ' | ' + ' | '.join(str(c[k]) for k in ('branches', 'loops', 'awaits', 'returns', 'throws', 'catches')) + ' |')
        if item.get('implicit_return'):
            lines += ['', 'A ocorrência em ' + item['artifact'] + ':' + str(item['start_line']) + ' usa retorno implícito de arrow function.']
    for item in occurrences:
        lines += ['', '### ' + item['artifact'] + ':' + str(item['start_line']), '']
        lines.append('Chamadas escritas diretamente neste corpo: ' + (', '.join(code(x) for x in item['calls']) if item['calls'] else 'nenhuma chamada identificável por nome') + '.')
        if item['writes']:
            lines += ['', 'Alvos de atribuição ou incremento: ' + ', '.join(code(x) for x in item['writes']) + '.']
        if item['throw_targets']:
            lines += ['', 'Alvos de lançamento explícito: ' + ', '.join(code(x) for x in item['throw_targets']) + '.']
        lines += ['', 'SHA-256 do trecho: ' + code(item['body_sha256']) + '.']
    lines += ['', '## Como interpretar', '',
        'Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.', '',
        '[Método e limites do catálogo](' + relative(target, 'guide/methodology/README.md') + ').', ''
    ]
    target.write_text('\n'.join(lines))
    function_index.append({'module': key, 'qualified_name': qualified, 'readme': target_rel, 'occurrences': [x['id'] for x in occurrences]})

module_index = []
for module in modules:
    key = module['id']
    target_rel = 'mapped/modules/' + module_dir(key) + '/README.md'
    target = ROOT / target_rel
    target.parent.mkdir(parents=True, exist_ok=True)
    entries = sorted({s['qualified_name'] for s in by_module[key]})
    lines = ['# ' + code(key), '',
        'Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.', '',
        '[Guia funcional](' + relative(target, guide_for(key)) + ') · [Índice geral](' + relative(target, 'mapped/README.md') + ')', '',
        '## Seções de origem', '', '| Artefato | Trecho |', '| --- | --- |']
    for section in module['sections']:
        lines.append('| ' + section['artifact'] + ' | ' + source_link(target, section) + ' |')
    lines += ['', '## Funções nomeadas', '']
    if entries:
        lines += ['| Função ou método | Ocorrências | README |', '| --- | ---: | --- |']
        for name in entries:
            lines.append('| ' + safe(code(name)) + ' | ' + str(len(groups[(key,name)])) + ' | [Funcionamento estático](' + relative(target, function_path(key,name)) + ') |')
    else:
        lines += ['Esta seção não contém função nomeada no recorte selecionado. Pode conter constantes, schemas, tipos compilados ou inicialização. Consulte o código apontado acima.']
    lines += ['', '## Escopo', '',
        'Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.', '']
    target.write_text('\n'.join(lines))
    module_index.append({'module':key,'readme':target_rel,'functions':len(entries),'sections':len(module['sections'])})

page_groups = defaultdict(list)
for item in function_index:
    page_groups[item['module'].split('/')[0]].append(item)
page_shards = []
for category, items in sorted(page_groups.items()):
    rel = 'mapped/inventory/function-pages/' + category + '.json'
    target = ROOT / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(json.dumps(items, ensure_ascii=False, separators=(',',':')) + '\n')
    page_shards.append({'domain':category, 'path':rel, 'count':len(items)})
(INVENTORY / 'function-pages.json').write_text(json.dumps({'schema':1, 'functions':len(function_index), 'shards':page_shards}, ensure_ascii=False, indent=2) + '\n')
(INVENTORY / 'module-pages.json').write_text(json.dumps(module_index, ensure_ascii=False, separators=(',',':')) + '\n')
categories = defaultdict(list)
for item in module_index:
    categories[item['module'].split('/')[0]].append(item)
index = ROOT / 'mapped/README.md'
lines = ['# Mapped reference', '',
    'Catálogo navegável dos arquivos originais: **' + str(len(modules)) + ' módulos**, **' + str(len(groups)) + ' fichas de funções nomeadas**, **' + str(len(symbols)) + ' ocorrências** nos bundles analisados.', '',
    'Comece pelo [guia completo](../guide/README.md) para entender o funcionamento. Use este catálogo para ir de uma responsabilidade até cada implementação, sem misturar os dois bundles.', '',
    'A geração é estática e determinística. Não executa os arquivos originais. Callbacks sem nome não recebem ficha; definições e métodos nomeados, inclusive internos, recebem. As ocorrências preservam artefato e linha. [Método e limites](../guide/methodology/README.md).', '',
    '## Inventários', '',
    '- [Arquivos originais e hashes](inventory/original-files.json)',
    '- [Módulos e intervalos](inventory/modules.json)',
    '- [Funções e detalhes de AST](inventory/symbols.json)',
    '- [Métricas e arquivos analisados](inventory/analysis.json)',
    '- [Índice das fichas de funções](inventory/function-pages.json)', '',
    '## Módulos por domínio', '']
for category, items in sorted(categories.items()):
    lines += ['### ' + category, '', '| Módulo | Funções agrupadas |', '| --- | ---: |']
    for item in items:
        lines.append('| [' + safe(item['module']) + '](' + relative(index,item['readme']) + ') | ' + str(item['functions']) + ' |')
    lines.append('')
index.write_text('\n'.join(lines))
print('Rendered',len(modules),'module READMEs and',len(groups),'function READMEs.')
