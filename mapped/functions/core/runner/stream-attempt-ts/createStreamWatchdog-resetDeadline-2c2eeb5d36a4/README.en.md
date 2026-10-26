# `createStreamWatchdog/resetDeadline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590175-590175](../../../../../../reference/runtime/sand-eval-runner.cjs#L590175-L590175) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590175-590175](../../../../../../reference/runtime/sand-eval-runner.cjs#L590175-L590175) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:590175 uses an implicit arrow-function return.

### evaluation:590175

Calls written directly in this body: `deadlineHooks.reset`.

SHA-256 of the source span: `8e766aa916116be7986ad599530f8c57d3fce68e656689426c742c21300e5dc1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
