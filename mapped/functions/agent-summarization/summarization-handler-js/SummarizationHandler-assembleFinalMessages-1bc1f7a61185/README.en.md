# `SummarizationHandler.assembleFinalMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621624-621630](../../../../../reference/runtime/host-main.cjs#L621624-L621630) | `method` | no | `partitioned, summaryMessage` |
| [evaluation:305978-305984](../../../../../reference/runtime/sand-eval-runner.cjs#L305978-L305984) | `method` | no | `partitioned, summaryMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621624-621630](../../../../../reference/runtime/host-main.cjs#L621624-L621630) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305978-305984](../../../../../reference/runtime/sand-eval-runner.cjs#L305978-L305984) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:621624

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `30f576800b65eda339076ef42c579e4118f4d386fb9dc5edad4ab334cf84491a`.

### evaluation:305978

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `30f576800b65eda339076ef42c579e4118f4d386fb9dc5edad4ab334cf84491a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
