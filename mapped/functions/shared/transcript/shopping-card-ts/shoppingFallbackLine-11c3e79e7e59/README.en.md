# `shoppingFallbackLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707773-707780](../../../../../../reference/runtime/host-main.cjs#L707773-L707780) | `FunctionDeclaration` | no | `product` |
| [evaluation:481895-481902](../../../../../../reference/runtime/sand-eval-runner.cjs#L481895-L481902) | `FunctionDeclaration` | no | `product` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707773-707780](../../../../../../reference/runtime/host-main.cjs#L707773-L707780) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481895-481902](../../../../../../reference/runtime/sand-eval-runner.cjs#L481895-L481902) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707773

Calls written directly in this body: `bestOfferOf`, `formatShoppingMoney`, `initialVariantOf`, `markdownLinkTarget2`, `oneLine`, `product.title.replace`.

SHA-256 of the source span: `03544b39a11602cf83156d6825e349e0b7d0bdcf143b099aade2752c4afeab0e`.

### evaluation:481895

Calls written directly in this body: `bestOfferOf`, `formatShoppingMoney`, `initialVariantOf`, `markdownLinkTarget2`, `oneLine`, `product.title.replace`.

SHA-256 of the source span: `03544b39a11602cf83156d6825e349e0b7d0bdcf143b099aade2752c4afeab0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
