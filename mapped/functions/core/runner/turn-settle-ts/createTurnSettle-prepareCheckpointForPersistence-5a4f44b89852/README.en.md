# `createTurnSettle/prepareCheckpointForPersistence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590729-590745](../../../../../../reference/runtime/sand-eval-runner.cjs#L590729-L590745) | `ArrowFunctionExpression` | no | `checkpoint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590729-590745](../../../../../../reference/runtime/sand-eval-runner.cjs#L590729-L590745) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:590729

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `checkpoint.tokenDetails`, `observedSummaryArchiveCount`, `tokenDetailsPersistenceState`.

SHA-256 of the source span: `7318050a6ccd27fc64692a7b496afa010ff9ac6239504d1b0db91354b4e698cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
