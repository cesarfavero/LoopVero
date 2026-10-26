# `createStreamAttempt/runBoundedTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590354-590385](../../../../../../reference/runtime/sand-eval-runner.cjs#L590354-L590385) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590354-590385](../../../../../../reference/runtime/sand-eval-runner.cjs#L590354-L590385) | 1 | 0 | 2 | 0 | 0 | 0 |

The occurrence at evaluation:590354 uses an implicit arrow-function return.

### evaluation:590354

Calls written directly in this body: `runStreamOnce`, `runWithTransientRetry`.

SHA-256 of the source span: `e2f65666a5ab70fb93c6767df5d31f649838862eb31a6fbf787a05a9644dd38e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
