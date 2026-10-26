# `convertConversationMessagesToTrace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/trace-format.js` · [Module README](../../../../modules/agent-transcript/trace-format-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509621-509693](../../../../../reference/runtime/host-main.cjs#L509621-L509693) | `FunctionDeclaration` | no | `messages2, visibilityMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509621-509693](../../../../../reference/runtime/host-main.cjs#L509621-L509693) | 17 | 3 | 0 | 1 | 0 | 0 |

### host:509621

Calls written directly in this body: `applyToolCallTimestamps`, `extractToolResultContent`, `message.text.trim`, `message.thinking.text.trim`, `result.push`, `toolCalls2.push`, `tryParseJson`.

Assignment or increment targets: `i`, `role`, `toolCall2.tool_args`, `toolCall2.tool_call_id`, `toolCall2.tool_name`, `toolMessage.tool_args`, `toolMessage.tool_call_id`, `toolMessage.tool_name`, `toolMessage.tool_result`, `traceMessage.text`, `traceMessage.thinking`, `traceMessage.tool_calls`.

SHA-256 of the source span: `12149a11ffa871524efe7ca936250343342ab68050138e1c15bcc309244d4c69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
