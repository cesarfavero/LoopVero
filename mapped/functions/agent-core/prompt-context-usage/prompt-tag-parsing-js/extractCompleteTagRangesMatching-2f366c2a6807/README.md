# `extractCompleteTagRangesMatching`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-tag-parsing.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-tag-parsing-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476107-476138](../../../../../../reference/runtime/host-main.cjs#L476107-L476138) | `FunctionDeclaration` | não | `promptContent, matches` |
| [evaluation:255417-255448](../../../../../../reference/runtime/sand-eval-runner.cjs#L255417-L255448) | `FunctionDeclaration` | não | `promptContent, matches` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476107-476138](../../../../../../reference/runtime/host-main.cjs#L476107-L476138) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255417-255448](../../../../../../reference/runtime/sand-eval-runner.cjs#L255417-L255448) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:476107

Chamadas escritas diretamente neste corpo: `findOpenTagEnd`, `matches`, `openTagPattern.exec`, `promptContent.indexOf`, `ranges.push`.

Alvos de atribuição ou incremento: `openTagPattern.lastIndex`, `searchStart`.

SHA-256 do trecho: `797f403c87a43d515c3c54072f9f331f9545ce0d1e722cac1e1739474a656164`.

### evaluation:255417

Chamadas escritas diretamente neste corpo: `findOpenTagEnd`, `matches`, `openTagPattern.exec`, `promptContent.indexOf`, `ranges.push`.

Alvos de atribuição ou incremento: `openTagPattern.lastIndex`, `searchStart`.

SHA-256 do trecho: `3a224389634e929fb2e3b368f4c1f7fc75ce7e51178fbaa16382369ab981f7d0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
