# `SandProductAnalytics.trackEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/analytics/product-analytics.ts` · [Module README](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730504-730514](../../../../../../../reference/runtime/host-main.cjs#L730504-L730514) | `method` | no | `event, props` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730504-730514](../../../../../../../reference/runtime/host-main.cjs#L730504-L730514) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:730504

Calls written directly in this body: `console.info`, `this.enrich`, `this.state.buffer.getEvents`, `this.state.buffer.track`.

SHA-256 of the source span: `2ef59e55fab6a0dfc43cbac10d72bad146e22d91f9229b6ce50c085c65120aff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
