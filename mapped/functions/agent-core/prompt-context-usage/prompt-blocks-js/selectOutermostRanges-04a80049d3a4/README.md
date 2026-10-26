# `selectOutermostRanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476192-476209](../../../../../../reference/runtime/host-main.cjs#L476192-L476209) | `FunctionDeclaration` | não | `ranges` |
| [evaluation:255502-255519](../../../../../../reference/runtime/sand-eval-runner.cjs#L255502-L255519) | `FunctionDeclaration` | não | `ranges` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476192-476209](../../../../../../reference/runtime/host-main.cjs#L476192-L476209) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255502-255519](../../../../../../reference/runtime/sand-eval-runner.cjs#L255502-L255519) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:476192

Chamadas escritas diretamente neste corpo: `.sort`, `selected.push`.

Alvos de atribuição ou incremento: `coveredUntil`.

SHA-256 do trecho: `1fba5bb07e63801e05e10f9236600427fd02a4db30074bc85c8b2138185fa955`.

### evaluation:255502

Chamadas escritas diretamente neste corpo: `.sort`, `selected.push`.

Alvos de atribuição ou incremento: `coveredUntil`.

SHA-256 do trecho: `1fba5bb07e63801e05e10f9236600427fd02a4db30074bc85c8b2138185fa955`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
