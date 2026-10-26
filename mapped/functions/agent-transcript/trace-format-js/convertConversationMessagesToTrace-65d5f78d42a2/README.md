# `convertConversationMessagesToTrace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/trace-format.js` · [README do módulo](../../../../modules/agent-transcript/trace-format-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509621-509693](../../../../../reference/runtime/host-main.cjs#L509621-L509693) | `FunctionDeclaration` | não | `messages2, visibilityMode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509621-509693](../../../../../reference/runtime/host-main.cjs#L509621-L509693) | 17 | 3 | 0 | 1 | 0 | 0 |

### host:509621

Chamadas escritas diretamente neste corpo: `applyToolCallTimestamps`, `extractToolResultContent`, `message.text.trim`, `message.thinking.text.trim`, `result.push`, `toolCalls2.push`, `tryParseJson`.

Alvos de atribuição ou incremento: `i`, `role`, `toolCall2.tool_args`, `toolCall2.tool_call_id`, `toolCall2.tool_name`, `toolMessage.tool_args`, `toolMessage.tool_call_id`, `toolMessage.tool_name`, `toolMessage.tool_result`, `traceMessage.text`, `traceMessage.thinking`, `traceMessage.tool_calls`.

SHA-256 do trecho: `12149a11ffa871524efe7ca936250343342ab68050138e1c15bcc309244d4c69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
