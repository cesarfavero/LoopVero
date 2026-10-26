# `ModelStreamWallClockMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-stream/wall-clock-limit.ts` · [Module README](../../../../../../modules/core/runner/model-stream/wall-clock-limit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586688-586742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586688-L586742) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586688-586742](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586688-L586742) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586688

Calls written directly in this body: `ctx.withCancel`, `cutAfter`, `fullStream`, `result.response.then`, `this.expiry.arm`, `this.innerExecutor.stream`.

Assignment or increment targets: `this.streams`.

SHA-256 of the source span: `d0077b7ccd53531e5c9fd734b874fa10a722466f15e52552f2a91d7bba1ab38e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
