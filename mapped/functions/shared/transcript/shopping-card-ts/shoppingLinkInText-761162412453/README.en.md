# `shoppingLinkInText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707748-707763](../../../../../../reference/runtime/host-main.cjs#L707748-L707763) | `FunctionDeclaration` | no | `text3, card` |
| [evaluation:481870-481885](../../../../../../reference/runtime/sand-eval-runner.cjs#L481870-L481885) | `FunctionDeclaration` | no | `text3, card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707748-707763](../../../../../../reference/runtime/host-main.cjs#L707748-L707763) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481870-481885](../../../../../../reference/runtime/sand-eval-runner.cjs#L481870-L481885) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707748

Calls written directly in this body: `Array.from`, `card.products.flatMap`, `links.find`, `new Set`, `text3.matchAll`.

SHA-256 of the source span: `7bc234c6dfb193fbd62ae8c77d02eaf2b3a265fe4526f4567ad97415980704f6`.

### evaluation:481870

Calls written directly in this body: `Array.from`, `card.products.flatMap`, `links.find`, `new Set`, `text3.matchAll`.

SHA-256 of the source span: `7bc234c6dfb193fbd62ae8c77d02eaf2b3a265fe4526f4567ad97415980704f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
