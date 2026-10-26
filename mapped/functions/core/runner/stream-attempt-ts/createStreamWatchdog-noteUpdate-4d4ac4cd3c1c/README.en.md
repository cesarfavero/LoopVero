# `createStreamWatchdog/noteUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/stream-attempt.ts` · [Module README](../../../../../modules/core/runner/stream-attempt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590169-590174](../../../../../../reference/runtime/sand-eval-runner.cjs#L590169-L590174) | `ArrowFunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590169-590174](../../../../../../reference/runtime/sand-eval-runner.cjs#L590169-L590174) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590169

Calls written directly in this body: `classifyStreamActivity`, `deadlineHooks.noteStreamActivity`.

Assignment or increment targets: `streamOutputProduced`.

SHA-256 of the source span: `8111a262bba7f78050cafd6690a89b9782538f71514a9f8c204d3e246d71bf3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
