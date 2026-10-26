# `SandProductAnalytics.goLive/getAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/analytics/product-analytics.ts` · [Module README](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730459-730469](../../../../../../../reference/runtime/host-main.cjs#L730459-L730469) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730459-730469](../../../../../../../reference/runtime/host-main.cjs#L730459-L730469) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:730459

Calls written directly in this body: `this.options.getAccessToken`, `this.options.onAccessTokenFailure`.

SHA-256 of the source span: `d47b0c0f810033671e4ef229039a9355087e979e0f3f3e62ce6fd82835e1a93d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
