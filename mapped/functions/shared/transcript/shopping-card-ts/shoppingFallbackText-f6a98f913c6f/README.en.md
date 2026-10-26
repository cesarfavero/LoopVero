# `shoppingFallbackText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707781-707786](../../../../../../reference/runtime/host-main.cjs#L707781-L707786) | `FunctionDeclaration` | no | `card` |
| [evaluation:481903-481908](../../../../../../reference/runtime/sand-eval-runner.cjs#L481903-L481908) | `FunctionDeclaration` | no | `card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707781-707786](../../../../../../reference/runtime/host-main.cjs#L707781-L707786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481903-481908](../../../../../../reference/runtime/sand-eval-runner.cjs#L481903-L481908) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707781

Calls written directly in this body: `.join`, `card.products.flatMap`.

SHA-256 of the source span: `2ac38abcf5267f3aa320f3888da4ad618a390f594483058e1bc09f23e65a43a0`.

### evaluation:481903

Calls written directly in this body: `.join`, `card.products.flatMap`.

SHA-256 of the source span: `2ac38abcf5267f3aa320f3888da4ad618a390f594483058e1bc09f23e65a43a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
