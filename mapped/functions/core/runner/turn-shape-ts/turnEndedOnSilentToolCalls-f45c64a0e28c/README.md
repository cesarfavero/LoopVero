# `turnEndedOnSilentToolCalls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-shape.ts` · [README do módulo](../../../../../modules/core/runner/turn-shape-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587213-587264](../../../../../../reference/runtime/sand-eval-runner.cjs#L587213-L587264) | `FunctionDeclaration` | não | `rawMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587213-587264](../../../../../../reference/runtime/sand-eval-runner.cjs#L587213-L587264) | 15 | 4 | 0 | 6 | 0 | 0 |

### evaluation:587213

Chamadas escritas diretamente neste corpo: `.some`, `deliveryToolCallIds`, `erroredToolResultIds`, `hasDeliveryToolCall`, `hasUndeliveredTextAfter`, `isInjectedReminderMessage`, `isUndeliveredAssistantText`, `rawMessages.map`, `tailCalls.some`, `toolCalls2`.

Alvos de atribuição ou incremento: `ackedFirst`, `boundary`, `firstCallingIndex`, `index`, `lastDeliveryIndex`, `tailIndex`.

SHA-256 do trecho: `b71b6a0e7b279272ee0a8aac436034e4d6575f53464fedc3a207254ae6d1c229`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
