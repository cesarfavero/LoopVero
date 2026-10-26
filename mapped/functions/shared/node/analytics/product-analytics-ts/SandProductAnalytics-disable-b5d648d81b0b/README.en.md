# `SandProductAnalytics.disable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/analytics/product-analytics.ts` · [Module README](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730492-730500](../../../../../../../reference/runtime/host-main.cjs#L730492-L730500) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730492-730500](../../../../../../../reference/runtime/host-main.cjs#L730492-L730500) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:730492

Calls written directly in this body: `console.info`, `this.state.buffer.clear`.

Assignment or increment targets: `this.state`.

SHA-256 of the source span: `0a2272add1087b8f754b9189ed584b00aeb547de2c49be9e893dc38fe9e67c7a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
