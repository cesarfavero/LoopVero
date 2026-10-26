# `createSendMessageTool2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761332-761613](../../../../../../../reference/runtime/host-main.cjs#L761332-L761613) | `FunctionDeclaration` | não | `deps` |
| [evaluation:552147-552428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552147-L552428) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761332-761613](../../../../../../../reference/runtime/host-main.cjs#L761332-L761613) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552147-552428](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552147-L552428) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:761332

Chamadas escritas diretamente neste corpo: `advertisedSendMessageParameters`, `conciseAdvertisedSendMessageParameters`, `createSendMessageToolCall`, `createZodAgentTool`, `credentialRequestKind`, `deps.linkItems.offered`, `deps.renderCards.offered`, `deps.renderCards.shipmentOffered`, `deps.renderCards.shoppingOffered`, `deps.taskThreads`, `new Map`, `new SendMessageToolCall`, `new Set`, `rejectingUnsupportedAttachmentFields`, `reportThrownSendFailure`, `sendMessageParametersByTurnBehavior`, `sendToUserActEnabled`, `sendToUserOpenEnabled`, `usesConciseSendToUser`, `withSafeParsedArgs`.

SHA-256 do trecho: `d536af00506ebfb75dc78ccb40ad7b29ffbaf5bc69d7b0b39c01f074145477e6`.

### evaluation:552147

Chamadas escritas diretamente neste corpo: `advertisedSendMessageParameters`, `conciseAdvertisedSendMessageParameters`, `createSendMessageToolCall`, `createZodAgentTool`, `credentialRequestKind`, `deps.linkItems.offered`, `deps.renderCards.offered`, `deps.renderCards.shipmentOffered`, `deps.renderCards.shoppingOffered`, `deps.taskThreads`, `new Map`, `new SendMessageToolCall`, `new Set`, `rejectingUnsupportedAttachmentFields`, `reportThrownSendFailure`, `sendMessageParametersByTurnBehavior`, `sendToUserActEnabled`, `sendToUserOpenEnabled`, `usesConciseSendToUser`, `withSafeParsedArgs`.

SHA-256 do trecho: `0cdb06231685aca4700c71b9732c2963e98d6902b03f07159f08f1b47c2422c7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
