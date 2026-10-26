# `createStreamAttempt/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590386-590410](../../../../../../reference/runtime/sand-eval-runner.cjs#L590386-L590410) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590386-590410](../../../../../../reference/runtime/sand-eval-runner.cjs#L590386-L590410) | 3 | 0 | 1 | 1 | 1 | 1 |

### evaluation:590386

Calls written directly in this body: `host.reportTurnRetry`, `isRetryableProviderError`, `runBoundedTurn`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `44764061af7f18a7ae6a926ee49aed3b1e66fbc0de3195366c9864da815c3cb0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
