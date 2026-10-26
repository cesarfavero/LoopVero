# `executeSummarizationStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620714-620783](../../../../../reference/runtime/host-main.cjs#L620714-L620783) | `FunctionDeclaration` | yes | `ctx, promptSession, summaryPrompt, maxOutputTokens` |
| [evaluation:305068-305137](../../../../../reference/runtime/sand-eval-runner.cjs#L305068-L305137) | `FunctionDeclaration` | yes | `ctx, promptSession, summaryPrompt, maxOutputTokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620714-620783](../../../../../reference/runtime/host-main.cjs#L620714-L620783) | 5 | 1 | 2 | 1 | 1 | 1 |
| [evaluation:305068-305137](../../../../../reference/runtime/sand-eval-runner.cjs#L305068-L305137) | 5 | 1 | 2 | 1 | 1 | 1 |

### host:620714

Calls written directly in this body: `.join`, `Array.isArray`, `assistantMessages.at`, `executor.stream`, `lastAssistantMessage.content.map`, `logger38.warn`, `new Error`, `promptSession.getExecutor`, `response.messages.filter`, `result.extendedUsage.catch`, `result.invocationId.catch`, `result.providerMetadata.catch`, `result.response.catch`, `result.usage.catch`, `text3.trim`.

Assignment or increment targets: `inputTokens`, `outputTokens`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `c0a12b3966aab4463952da65a097e0e098681b75362fb2645549edd888ad8e3a`.

### evaluation:305068

Calls written directly in this body: `.join`, `Array.isArray`, `assistantMessages.at`, `executor.stream`, `lastAssistantMessage.content.map`, `logger13.warn`, `new Error`, `promptSession.getExecutor`, `response.messages.filter`, `result.extendedUsage.catch`, `result.invocationId.catch`, `result.providerMetadata.catch`, `result.response.catch`, `result.usage.catch`, `text3.trim`.

Assignment or increment targets: `inputTokens`, `outputTokens`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `6cc33862c16b27d6aeedd9c79df760c1a1065dc418245cebcde3674e049266d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
