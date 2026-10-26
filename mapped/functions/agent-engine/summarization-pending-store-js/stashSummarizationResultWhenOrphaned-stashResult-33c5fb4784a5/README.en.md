# `stashSummarizationResultWhenOrphaned/stashResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-engine/summarization-pending-store.js` · [Module README](../../../../modules/agent-engine/summarization-pending-store-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647915-647967](../../../../../reference/runtime/host-main.cjs#L647915-L647967) | `ArrowFunctionExpression` | yes | `result` |
| [evaluation:439572-439624](../../../../../reference/runtime/sand-eval-runner.cjs#L439572-L439624) | `ArrowFunctionExpression` | yes | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647915-647967](../../../../../reference/runtime/host-main.cjs#L647915-L647967) | 2 | 0 | 2 | 1 | 0 | 1 |
| [evaluation:439572-439624](../../../../../reference/runtime/sand-eval-runner.cjs#L439572-L439624) | 2 | 0 | 2 | 1 | 0 | 1 |

### host:647915

Calls written directly in this body: `args.store.store`, `backgroundSummarizationStashed.increment`, `buildPendingSummaryRecord`, `logger61.info`, `logger61.warn`.

Assignment or increment targets: `stashStarted`.

SHA-256 of the source span: `e8487e3b147cfd6f356c4821ad2dad1a8918b6e8c5ac826b0108631822d5adc8`.

### evaluation:439572

Calls written directly in this body: `args.store.store`, `backgroundSummarizationStashed.increment`, `buildPendingSummaryRecord`, `logger38.info`, `logger38.warn`.

Assignment or increment targets: `stashStarted`.

SHA-256 of the source span: `7da2bf706ad5394167e3cf4df75ff3b5d02ee43e53d65784e31e2cbfc1c5707e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
