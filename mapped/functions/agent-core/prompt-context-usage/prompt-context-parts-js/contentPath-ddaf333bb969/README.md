# `contentPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476287-476295](../../../../../../reference/runtime/host-main.cjs#L476287-L476295) | `FunctionDeclaration` | não | `index, field` |
| [evaluation:255597-255605](../../../../../../reference/runtime/sand-eval-runner.cjs#L255597-L255605) | `FunctionDeclaration` | não | `index, field` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476287-476295](../../../../../../reference/runtime/host-main.cjs#L476287-L476295) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255597-255605](../../../../../../reference/runtime/sand-eval-runner.cjs#L255597-L255605) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:476287

Chamadas escritas diretamente neste corpo: `new Map`, `paths.get`, `paths.set`.

Alvos de atribuição ou incremento: `CONTENT_PATHS[computed]`, `path33`.

SHA-256 do trecho: `a1b1165e100d6c1f29e356e5fc0a966362b0b4b5a99da604a8d3c9c963b2842c`.

### evaluation:255597

Chamadas escritas diretamente neste corpo: `new Map`, `paths.get`, `paths.set`.

Alvos de atribuição ou incremento: `CONTENT_PATHS[computed]`, `path33`.

SHA-256 do trecho: `a1b1165e100d6c1f29e356e5fc0a966362b0b4b5a99da604a8d3c9c963b2842c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
