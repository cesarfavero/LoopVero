# `SummarizationHandler.isInputOrOutputTokenLimitError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621808-621810](../../../../../reference/runtime/host-main.cjs#L621808-L621810) | `method` | no | `error64` |
| [evaluation:306162-306164](../../../../../reference/runtime/sand-eval-runner.cjs#L306162-L306164) | `method` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621808-621810](../../../../../reference/runtime/host-main.cjs#L621808-L621810) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:306162-306164](../../../../../reference/runtime/sand-eval-runner.cjs#L306162-L306164) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621808

Calls written directly in this body: `hasErrorName`.

SHA-256 of the source span: `f603996bf88a77ba937a89c49ca09cd0edbfe975503a73f70da33dc3a006ab0a`.

### evaluation:306162

Calls written directly in this body: `hasErrorName`.

SHA-256 of the source span: `d09943b1619f72b2098272022c1c2685b14a71ce63a79a62c87fb7875ccc5532`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
