# `createPlacesSearchTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768949-768970](../../../../../../../../reference/runtime/host-main.cjs#L768949-L768970) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:564524-564545](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564524-L564545) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768949-768970](../../../../../../../../reference/runtime/host-main.cjs#L768949-L768970) | 6 | 0 | 1 | 3 | 2 | 0 |
| [evaluation:564524-564545](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564524-L564545) | 6 | 0 | 1 | 3 | 2 | 0 |

### host:768949

Calls written directly in this body: `Date.now`, `d.cardsOffered`, `d.nowMs`, `d.places.search`, `formatPlacesSummary`, `new SandModelVisibleError`, `placesCardNextStep`, `placesRenderCardKind`, `registerRenderCard`, `searchRequestOf`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `519ebc95a25c18ddd46cc6ec7cdaf0a5a44bc379e20fdc6033d6e5aa402336dc`.

### evaluation:564524

Calls written directly in this body: `Date.now`, `d.cardsOffered`, `d.nowMs`, `d.places.search`, `formatPlacesSummary`, `new SandModelVisibleError`, `placesCardNextStep`, `placesRenderCardKind`, `registerRenderCard`, `searchRequestOf`.

Explicit throw targets: `SandModelVisibleError`.

SHA-256 of the source span: `519ebc95a25c18ddd46cc6ec7cdaf0a5a44bc379e20fdc6033d6e5aa402336dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
