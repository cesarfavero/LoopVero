# `createProductSearchTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/product-search/product-search-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/product-search/product-search-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781982-782004](../../../../../../../../reference/runtime/host-main.cjs#L781982-L782004) | `ArrowFunctionExpression` | yes | `ctx, args` |
| [evaluation:582327-582349](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582327-L582349) | `ArrowFunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781982-782004](../../../../../../../../reference/runtime/host-main.cjs#L781982-L782004) | 4 | 0 | 1 | 1 | 2 | 1 |
| [evaluation:582327-582349](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582327-L582349) | 4 | 0 | 1 | 1 | 2 | 1 |

### host:781982

Calls written directly in this body: `new SandModelVisibleError`, `port.search`, `renderProductSearchResult`, `shoppingOffered`.

Assignment or increment targets: `result`.

Explicit throw targets: `SandModelVisibleError`, `error64`.

SHA-256 of the source span: `237c869bf9232eb952b1778d56ea689b2147dd0e930e5cd66fbfa4a61a9c8e72`.

### evaluation:582327

Calls written directly in this body: `new SandModelVisibleError`, `port.search`, `renderProductSearchResult`, `shoppingOffered`.

Assignment or increment targets: `result`.

Explicit throw targets: `SandModelVisibleError`, `error63`.

SHA-256 of the source span: `448ffc35a87ce83b704b03f283f3ad8cbbb2cad078d7d2a91477cc4d148fe6ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
