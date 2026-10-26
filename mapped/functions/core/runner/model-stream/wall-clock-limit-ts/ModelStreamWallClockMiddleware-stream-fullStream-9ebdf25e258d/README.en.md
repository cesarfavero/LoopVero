# `ModelStreamWallClockMiddleware.stream/fullStream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/wall-clock-limit.ts` · [Module README](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586709-586724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586709-L586724) | `FunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586709-586724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586709-L586724) | 2 | 1 | 0 | 0 | 2 | 1 |

### evaluation:586709

Calls written directly in this body: `MODEL_OUTPUT_PART_TYPES.has`, `armed.dispose`, `cutAfter`, `expiry.arm`.

Assignment or increment targets: `armed`, `streaming`.

Explicit throw targets: `LogicalExpression`, `limitError`.

SHA-256 of the source span: `30e06746a53e1f1be430c688a3f8d127e87c4ba6fd2190a78ec64a0ceb868f8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
