# `isTurnUnfinished`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621821-621824](../../../../../reference/runtime/host-main.cjs#L621821-L621824) | `FunctionDeclaration` | no | `messagesAfterRequest` |
| [evaluation:306175-306178](../../../../../reference/runtime/sand-eval-runner.cjs#L306175-L306178) | `FunctionDeclaration` | no | `messagesAfterRequest` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621821-621824](../../../../../reference/runtime/host-main.cjs#L621821-L621824) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306175-306178](../../../../../reference/runtime/sand-eval-runner.cjs#L306175-L306178) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621821

Calls written directly in this body: `hasToolInvocation`, `messagesAfterRequest.findLast`.

SHA-256 of the source span: `da680e0a832791dd806aa5d38128cd3e26ceaf2299463bc6aa5de0a948ca2011`.

### evaluation:306175

Calls written directly in this body: `hasToolInvocation`, `messagesAfterRequest.findLast`.

SHA-256 of the source span: `da680e0a832791dd806aa5d38128cd3e26ceaf2299463bc6aa5de0a948ca2011`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
