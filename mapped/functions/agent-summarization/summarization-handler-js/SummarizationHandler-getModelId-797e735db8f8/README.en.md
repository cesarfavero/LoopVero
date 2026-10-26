# `SummarizationHandler.getModelId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621469-621471](../../../../../reference/runtime/host-main.cjs#L621469-L621471) | `method` | no | `(none)` |
| [evaluation:305823-305825](../../../../../reference/runtime/sand-eval-runner.cjs#L305823-L305825) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621469-621471](../../../../../reference/runtime/host-main.cjs#L621469-L621471) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305823-305825](../../../../../reference/runtime/sand-eval-runner.cjs#L305823-L305825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621469

Calls written directly in this body: `this.promptSession.getModelId`.

SHA-256 of the source span: `b4d2bf2587f751c2763f5b0c7f19da154cb0cc286eb4d9dd5c82bd4959ad4ced`.

### evaluation:305823

Calls written directly in this body: `this.promptSession.getModelId`.

SHA-256 of the source span: `b4d2bf2587f751c2763f5b0c7f19da154cb0cc286eb4d9dd5c82bd4959ad4ced`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
