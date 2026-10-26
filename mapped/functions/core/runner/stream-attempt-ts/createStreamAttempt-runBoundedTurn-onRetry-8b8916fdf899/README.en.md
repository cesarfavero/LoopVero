# `createStreamAttempt/runBoundedTurn/onRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590364-590384](../../../../../../reference/runtime/sand-eval-runner.cjs#L590364-L590384) | `ArrowFunctionExpression` | no | `info2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590364-590384](../../../../../../reference/runtime/sand-eval-runner.cjs#L590364-L590384) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:590364

Calls written directly in this body: `automationPolicy.onRetry`, `host.emitRetrying`, `host.getStreamOutputProduced`, `host.reportTurnRetry`, `host.setTraceAttributes`.

Assignment or increment targets: `resumeStreamFrom`, `retriesPerformed`.

SHA-256 of the source span: `603cb210713847793993c0387d66aaab4f44102d4b4cfef602161bc1dc679cd4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
