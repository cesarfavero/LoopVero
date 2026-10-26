# `subscribeInvalidated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542228-542233](../../../../../../../reference/runtime/host-main.cjs#L542228-L542233) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542228-542233](../../../../../../../reference/runtime/host-main.cjs#L542228-L542233) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542228

Calls written directly in this body: `this.invalidationListeners.add`.

SHA-256 of the source span: `844e4a3c195c58815fb4e522f512ce24bd086644a84ad94b8f234d8c46d5ff45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
