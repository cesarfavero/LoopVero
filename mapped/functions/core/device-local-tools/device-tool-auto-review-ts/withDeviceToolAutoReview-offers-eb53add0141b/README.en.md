# `withDeviceToolAutoReview/offers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566235-566235](../../../../../../reference/runtime/sand-eval-runner.cjs#L566235-L566235) | `ArrowFunctionExpression` | no | `toolId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566235-566235](../../../../../../reference/runtime/sand-eval-runner.cjs#L566235-L566235) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:566235 uses an implicit arrow-function return.

### evaluation:566235

Calls written directly in this body: `port.offers`.

SHA-256 of the source span: `bae633c65ef9a622b206536b3a5625cca3aacd093106274d745c0513bc59435e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
