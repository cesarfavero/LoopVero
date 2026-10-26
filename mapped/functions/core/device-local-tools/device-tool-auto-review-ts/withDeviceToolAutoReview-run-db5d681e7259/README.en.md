# `withDeviceToolAutoReview/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/device-local-tools/device-tool-auto-review.ts` · [Module README](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566236-566272](../../../../../../reference/runtime/sand-eval-runner.cjs#L566236-L566272) | `ArrowFunctionExpression` | no | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566236-566272](../../../../../../reference/runtime/sand-eval-runner.cjs#L566236-L566272) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:566236 uses an implicit arrow-function return.

### evaluation:566236

Calls written directly in this body: `port.run`.

SHA-256 of the source span: `fdf01e8f4c460662c9d23fe9d0aa872663308d53ef65857fdf0879669cc5eea3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
