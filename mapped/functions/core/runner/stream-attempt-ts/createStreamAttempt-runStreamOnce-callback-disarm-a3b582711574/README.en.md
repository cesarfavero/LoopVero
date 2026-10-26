# `createStreamAttempt/runStreamOnce/<callback>/disarm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590301-590305](../../../../../../reference/runtime/sand-eval-runner.cjs#L590301-L590305) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590301-590305](../../../../../../reference/runtime/sand-eval-runner.cjs#L590301-L590305) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:590301

Calls written directly in this body: `armed.dispose`, `host.clearDeadlineHooksIf`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `e81e215f572d2f38a143d054feac80f553cee6c407e8e4a6f38c4c6c98a69228`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
