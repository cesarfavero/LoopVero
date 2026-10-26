# `createErrorFreeStepTracker/bindRun/visibleOutput`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/error-free-step/error-free-step.ts` · [Module README](../../../../../../modules/core/runner/error-free-step/error-free-step-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589046-589052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589046-L589052) | `FunctionExpression` | no | `kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589046-589052](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589046-L589052) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:589046

Calls written directly in this body: `pastDeadline`, `settle2`.

SHA-256 of the source span: `302de258d61734d16e396ff8405bcdb51a9052ad772b3268f12a633a2b1ae7f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
