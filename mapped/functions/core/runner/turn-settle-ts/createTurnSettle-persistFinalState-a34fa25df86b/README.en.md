# `createTurnSettle/persistFinalState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:591151-591155](../../../../../../reference/runtime/sand-eval-runner.cjs#L591151-L591155) | `ArrowFunctionExpression` | yes | `baseCtx, finalState` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:591151-591155](../../../../../../reference/runtime/sand-eval-runner.cjs#L591151-L591155) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:591151

Calls written directly in this body: `persistCheckpoint`, `persistPendingProfileAnnouncement`, `prepareCheckpointForPersistence`.

SHA-256 of the source span: `7097c2a8cd0069d26c1649239d632e67387841df31e64ccaeecdf562f039977c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
