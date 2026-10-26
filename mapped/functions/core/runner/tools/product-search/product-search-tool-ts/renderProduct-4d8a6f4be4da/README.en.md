# `renderProduct`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781941-781961](../../../../../../../../reference/runtime/host-main.cjs#L781941-L781961) | `FunctionDeclaration` | no | `product, index` |
| [evaluation:582286-582306](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582286-L582306) | `FunctionDeclaration` | no | `product, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781941-781961](../../../../../../../../reference/runtime/host-main.cjs#L781941-L781961) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:582286-582306](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582286-L582306) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:781941

Calls written directly in this body: ` .repeat`, `.join`, `.map`, `bullets`, `fieldLines`, `items.push`, `optionBlock`, `product.offers.map`, `product.rating.toFixed`.

SHA-256 of the source span: `7a66d90d446540b65760d8c7e2dea845494fee67dc943d6abf84680212726475`.

### evaluation:582286

Calls written directly in this body: ` .repeat`, `.join`, `.map`, `bullets`, `fieldLines`, `items.push`, `optionBlock`, `product.offers.map`, `product.rating.toFixed`.

SHA-256 of the source span: `7a66d90d446540b65760d8c7e2dea845494fee67dc943d6abf84680212726475`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
