# `createStreamAttempt/runStreamOnce/persistCheckpoint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590210-590226](../../../../../../reference/runtime/sand-eval-runner.cjs#L590210-L590226) | `ArrowFunctionExpression` | yes | `checkpointCtx, checkpoint` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590210-590226](../../../../../../reference/runtime/sand-eval-runner.cjs#L590210-L590226) | 1 | 0 | 1 | 1 | 1 | 1 |

### evaluation:590210

Calls written directly in this body: `.then`, `Promise.resolve`, `checkpointOperations.add`, `checkpointOperations.delete`, `isCurrentAttempt`.

Assignment or increment targets: `checkpointFailure`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `f014b9d7184d24654dbb0eccfad6c03c18a9958181115875cdb5910ee55b5261`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
