# `SummarizationHandler.shouldUseDeterministicFallback`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621535-621550](../../../../../reference/runtime/host-main.cjs#L621535-L621550) | `method` | no | `result` |
| [evaluation:305889-305904](../../../../../reference/runtime/sand-eval-runner.cjs#L305889-L305904) | `method` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621535-621550](../../../../../reference/runtime/host-main.cjs#L621535-L621550) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:305889-305904](../../../../../reference/runtime/sand-eval-runner.cjs#L305889-L305904) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:621535

Calls written directly in this body: `.includes`, `errorKind.toLowerCase`.

SHA-256 of the source span: `67c33659383ae81cb967c42c37e07b913ff2b0a0ef569c9e1a8c282fc3fbef93`.

### evaluation:305889

Calls written directly in this body: `.includes`, `errorKind.toLowerCase`.

SHA-256 of the source span: `67c33659383ae81cb967c42c37e07b913ff2b0a0ef569c9e1a8c282fc3fbef93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
