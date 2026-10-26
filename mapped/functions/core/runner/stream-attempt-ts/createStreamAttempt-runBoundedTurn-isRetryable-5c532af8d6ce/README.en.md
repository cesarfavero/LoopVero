# `createStreamAttempt/runBoundedTurn/isRetryable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590357-590363](../../../../../../reference/runtime/sand-eval-runner.cjs#L590357-L590363) | `ArrowFunctionExpression` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590357-590363](../../../../../../reference/runtime/sand-eval-runner.cjs#L590357-L590363) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:590357 uses an implicit arrow-function return.

### evaluation:590357

Calls written directly in this body: `host.getStreamOutputProduced`, `shouldRetryTurnAttempt`.

SHA-256 of the source span: `8d60fa95e46e0d425a901be5058b28e922fc9b8fa02ecd6e2b8e9ab031ad5840`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
