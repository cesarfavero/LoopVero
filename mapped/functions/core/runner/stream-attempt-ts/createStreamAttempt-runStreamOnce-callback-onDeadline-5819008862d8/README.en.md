# `createStreamAttempt/runStreamOnce/<callback>/onDeadline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590268-590288](../../../../../../reference/runtime/sand-eval-runner.cjs#L590268-L590288) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590268-590288](../../../../../../reference/runtime/sand-eval-runner.cjs#L590268-L590288) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590268

Calls written directly in this body: `.then`, `cancelAttempt`, `drainCheckpoints`, `host.getStreamOutputProduced`, `new SandRunAbortError`.

Assignment or increment targets: `deadlineFired`, `settled`.

SHA-256 of the source span: `dfc45fb98eb543618636e90c87403da554e88bcd607f0427729d812b9a9cf04b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
