# `SummarizationOrchestrator.handleSummarization/onRunCancelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-orchestrator.js` · [Module README](../../../../modules/agent-engine/summarization-orchestrator-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:649822-649827](../../../../../reference/runtime/host-main.cjs#L649822-L649827) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:441475-441480](../../../../../reference/runtime/sand-eval-runner.cjs#L441475-L441480) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:649822-649827](../../../../../reference/runtime/host-main.cjs#L649822-L649827) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:441475-441480](../../../../../reference/runtime/sand-eval-runner.cjs#L441475-L441480) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:649822

Calls written directly in this body: `cancellationToken.onCancelled`.

Assignment or increment targets: `cancellationToken.cancelled`.

SHA-256 of the source span: `9b92fe9f2dd0d0f36cd1f37e5ec90ba33d8ebdd3816dd8dc78115d83463d6743`.

### evaluation:441475

Calls written directly in this body: `cancellationToken.onCancelled`.

Assignment or increment targets: `cancellationToken.cancelled`.

SHA-256 of the source span: `9b92fe9f2dd0d0f36cd1f37e5ec90ba33d8ebdd3816dd8dc78115d83463d6743`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
