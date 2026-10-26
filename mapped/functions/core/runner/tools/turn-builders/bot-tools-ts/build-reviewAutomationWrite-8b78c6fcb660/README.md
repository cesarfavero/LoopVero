# `build/reviewAutomationWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/bot-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772138-772153](../../../../../../../../reference/runtime/host-main.cjs#L772138-L772153) | `ArrowFunctionExpression` | não | `target, toolCallId` |
| [evaluation:571371-571386](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571371-L571386) | `ArrowFunctionExpression` | não | `target, toolCallId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772138-772153](../../../../../../../../reference/runtime/host-main.cjs#L772138-L772153) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:772138 usa retorno implícito de arrow function.
| [evaluation:571371-571386](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571371-L571386) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:571371 usa retorno implícito de arrow function.

### host:772138

Chamadas escritas diretamente neste corpo: `host.automationWriteReviewMode`, `host.getConversationId`, `reviewSandAutomationWrite`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `41ab95a696563a42d94524d6fa4a8b741e627848385287fe82241f4504ae7709`.

### evaluation:571371

Chamadas escritas diretamente neste corpo: `host.automationWriteReviewMode`, `host.getConversationId`, `reviewSandAutomationWrite`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `41ab95a696563a42d94524d6fa4a8b741e627848385287fe82241f4504ae7709`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
