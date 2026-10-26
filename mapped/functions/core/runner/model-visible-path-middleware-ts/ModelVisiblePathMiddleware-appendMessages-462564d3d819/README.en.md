# `ModelVisiblePathMiddleware.appendMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/model-visible-path-middleware.ts` · [Module README](../../../../../modules/core/runner/model-visible-path-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586834-586839](../../../../../../reference/runtime/sand-eval-runner.cjs#L586834-L586839) | `method` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586834-586839](../../../../../../reference/runtime/sand-eval-runner.cjs#L586834-L586839) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586834

Calls written directly in this body: `Array.isArray`, `messages.map`, `this.innerExecutor.appendMessages`, `toModelVisibleMessage`.

SHA-256 of the source span: `e083e6934a1d93c99c8193b8645a708ee0c5f781f3d4576f14877afcaef5efcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
