# `ModelStreamWallClockMiddleware.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/wall-clock-limit.ts` · [Module README](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586678-586683](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586678-L586683) | `method` | no | `innerExecutor, limitMs, cuts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586678-586683](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586678-L586683) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:586678

Calls written directly in this body: `createExpiryPolicy`, `super`.

Assignment or increment targets: `this.cuts`, `this.expiry`, `this.limitMs`.

SHA-256 of the source span: `3dacd9e71dadf4d44eabb66d3a0f6f9cc3fe8ee9701d4ba42463a08bd594709e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
