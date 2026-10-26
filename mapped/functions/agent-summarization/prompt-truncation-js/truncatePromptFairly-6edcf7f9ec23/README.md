# `truncatePromptFairly`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-summarization/prompt-truncation.js` · [README do módulo](../../../../modules/agent-summarization/prompt-truncation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617297-617334](../../../../../reference/runtime/host-main.cjs#L617297-L617334) | `FunctionDeclaration` | não | `params` |
| [evaluation:285837-285874](../../../../../reference/runtime/sand-eval-runner.cjs#L285837-L285874) | `FunctionDeclaration` | não | `params` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617297-617334](../../../../../reference/runtime/host-main.cjs#L617297-L617334) | 5 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285837-285874](../../../../../reference/runtime/sand-eval-runner.cjs#L285837-L285874) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:617297

Chamadas escritas diretamente neste corpo: `Math.max`, `computeMaxMinFairAllocations`, `computeMaxMinFairAllocationsDurationMs.histogram`, `entry.slice`, `formatOmittedMessagesPreamble`, `performance.now`, `resultParts.push`, `serialized.map`, `truncatePreservingUserQuery`.

Alvos de atribuição ou incremento: `droppedCount`, `fullCount`, `i`, `truncatedCount`.

SHA-256 do trecho: `fc172598e6605d7a8eb81823113827f591c36c94bfdb58d78b4f4139e9b2f347`.

### evaluation:285837

Chamadas escritas diretamente neste corpo: `Math.max`, `computeMaxMinFairAllocations`, `computeMaxMinFairAllocationsDurationMs.histogram`, `entry.slice`, `formatOmittedMessagesPreamble`, `performance.now`, `resultParts.push`, `serialized.map`, `truncatePreservingUserQuery`.

Alvos de atribuição ou incremento: `droppedCount`, `fullCount`, `i`, `truncatedCount`.

SHA-256 do trecho: `fc172598e6605d7a8eb81823113827f591c36c94bfdb58d78b4f4139e9b2f347`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
