# `isRequestMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621815-621817](../../../../../reference/runtime/host-main.cjs#L621815-L621817) | `FunctionDeclaration` | no | `message` |
| [evaluation:306169-306171](../../../../../reference/runtime/sand-eval-runner.cjs#L306169-L306171) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621815-621817](../../../../../reference/runtime/host-main.cjs#L621815-L621817) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306169-306171](../../../../../reference/runtime/sand-eval-runner.cjs#L306169-L306171) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621815

Calls written directly in this body: `isInjectedReminderMessage`, `isSummaryCarrier`.

SHA-256 of the source span: `35815ebc3cb42d8981c396898fde1b6d34d3e7665be20472e7905cd16557f97c`.

### evaluation:306169

Calls written directly in this body: `isInjectedReminderMessage`, `isSummaryCarrier`.

SHA-256 of the source span: `35815ebc3cb42d8981c396898fde1b6d34d3e7665be20472e7905cd16557f97c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
