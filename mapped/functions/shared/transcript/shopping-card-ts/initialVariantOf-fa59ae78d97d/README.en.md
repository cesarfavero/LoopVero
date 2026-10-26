# `initialVariantOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707729-707731](../../../../../../reference/runtime/host-main.cjs#L707729-L707731) | `FunctionDeclaration` | no | `product` |
| [evaluation:481851-481853](../../../../../../reference/runtime/sand-eval-runner.cjs#L481851-L481853) | `FunctionDeclaration` | no | `product` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707729-707731](../../../../../../reference/runtime/host-main.cjs#L707729-L707731) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481851-481853](../../../../../../reference/runtime/sand-eval-runner.cjs#L481851-L481853) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707729

Calls written directly in this body: `product.variants.find`.

SHA-256 of the source span: `dd4a28a018344c0290d5e1146d244ed633b8568fed010e34228b94e6373c4b8d`.

### evaluation:481851

Calls written directly in this body: `product.variants.find`.

SHA-256 of the source span: `dd4a28a018344c0290d5e1146d244ed633b8568fed010e34228b94e6373c4b8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
