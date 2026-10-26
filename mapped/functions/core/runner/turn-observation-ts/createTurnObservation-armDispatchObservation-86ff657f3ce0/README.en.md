# `createTurnObservation/armDispatchObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588774-588885](../../../../../../reference/runtime/sand-eval-runner.cjs#L588774-L588885) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588774-588885](../../../../../../reference/runtime/sand-eval-runner.cjs#L588774-L588885) | 3 | 0 | 0 | 1 | 0 | 1 |

### evaluation:588774

Calls written directly in this body: `Date.now`, `Math.max`, `Math.round`, `Number.isFinite`, `bucketClockSkewDeltaMs`, `clock.monotonicNow`, `deps.resolveModelId`, `deps.runCtx.withName`, `deps.setRunAttribute`, `errorLogTag`, `new Date`, `onSendDispatch`, `process.stderr.write`, `recordCompletedSpanIfParented`, `sanitizeCrossClockDurationMs`.

SHA-256 of the source span: `08637a404e45d07392f9a479e5e7f99ef86f73fe03bb76ca0dc02448cfe35b90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
