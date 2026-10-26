# `createStreamAttempt/runStreamOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590197-590349](../../../../../../reference/runtime/sand-eval-runner.cjs#L590197-L590349) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590197-590349](../../../../../../reference/runtime/sand-eval-runner.cjs#L590197-L590349) | 4 | 0 | 2 | 2 | 4 | 2 |

### evaluation:590197

Calls written directly in this body: `Math.min`, `ctx.signal.throwIfAborted`, `ctx.withCancel`, `drainCheckpoints`, `host.setStreamOutputProduced`, `host.startStream`, `host.streamDeadlineConfig`, `new Promise`, `new Set`, `resolveStreamDeadlinePolicy`, `settleAttempt`.

Assignment or increment targets: `activeAttempt`, `attemptResumeCheckpoint`, `streamPromise`.

Explicit throw targets: `checkpointFailure.reason`, `error63`, `failed.reason`.

SHA-256 of the source span: `e765e53fea546b8088963bb4757b7ff79658c922dbaf8726cf86f84485837059`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
