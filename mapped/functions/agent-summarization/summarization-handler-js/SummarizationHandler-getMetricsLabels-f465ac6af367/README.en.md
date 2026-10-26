# `SummarizationHandler.getMetricsLabels`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621475-621477](../../../../../reference/runtime/host-main.cjs#L621475-L621477) | `method` | no | `(none)` |
| [evaluation:305829-305831](../../../../../reference/runtime/sand-eval-runner.cjs#L305829-L305831) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621475-621477](../../../../../reference/runtime/host-main.cjs#L621475-L621477) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305829-305831](../../../../../reference/runtime/sand-eval-runner.cjs#L305829-L305831) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621475

Calls written directly in this body: `parseSummarizerModelLabel`, `this.promptSession.getModelId`.

SHA-256 of the source span: `97243a814c65ec4d3c6b107cb89e9a434ad4747039b4b96ebe23d5b68386018a`.

### evaluation:305829

Calls written directly in this body: `parseSummarizerModelLabel`, `this.promptSession.getModelId`.

SHA-256 of the source span: `97243a814c65ec4d3c6b107cb89e9a434ad4747039b4b96ebe23d5b68386018a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
