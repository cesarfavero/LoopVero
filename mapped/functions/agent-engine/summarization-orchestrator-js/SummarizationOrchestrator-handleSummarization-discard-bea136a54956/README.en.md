# `SummarizationOrchestrator.handleSummarization/discard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649960-649967](../../../../../reference/runtime/host-main.cjs#L649960-L649967) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:441613-441620](../../../../../reference/runtime/sand-eval-runner.cjs#L441613-L441620) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649960-649967](../../../../../reference/runtime/host-main.cjs#L649960-L649967) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:441613-441620](../../../../../reference/runtime/sand-eval-runner.cjs#L441613-L441620) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:649960

Calls written directly in this body: `cancelGeneration`, `new BackgroundSummarizationDiscardedError`.

Assignment or increment targets: `cancellationToken.cancelled`, `discarded`.

SHA-256 of the source span: `bef8639ad8e27815bc0339b0c410134baf468c1b14f0777afb6055edddca8f26`.

### evaluation:441613

Calls written directly in this body: `cancelGeneration`, `new BackgroundSummarizationDiscardedError`.

Assignment or increment targets: `cancellationToken.cancelled`, `discarded`.

SHA-256 of the source span: `bef8639ad8e27815bc0339b0c410134baf468c1b14f0777afb6055edddca8f26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
