# `offersRenderCardKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cards/render-card-kinds.ts` · [Module README](../../../../../../modules/core/runner/cards/render-card-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768659-768661](../../../../../../../reference/runtime/host-main.cjs#L768659-L768661) | `FunctionDeclaration` | no | `host, kind` |
| [evaluation:564173-564175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564173-L564175) | `FunctionDeclaration` | no | `host, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768659-768661](../../../../../../../reference/runtime/host-main.cjs#L768659-L768661) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564173-564175](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564173-L564175) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768659

Calls written directly in this body: `RENDER_CARD_KIND_GATES[computed]`, `cardsReachUser`.

SHA-256 of the source span: `e40765d7ee86335437f95693e639c7e54690f35d16fdebcb39bd9d3de274875e`.

### evaluation:564173

Calls written directly in this body: `RENDER_CARD_KIND_GATES[computed]`, `cardsReachUser`.

SHA-256 of the source span: `e40765d7ee86335437f95693e639c7e54690f35d16fdebcb39bd9d3de274875e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
