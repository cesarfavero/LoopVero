# `placeFallbackLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768757-768766](../../../../../../reference/runtime/host-main.cjs#L768757-L768766) | `FunctionDeclaration` | no | `place` |
| [evaluation:564268-564277](../../../../../../reference/runtime/sand-eval-runner.cjs#L564268-L564277) | `FunctionDeclaration` | no | `place` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768757-768766](../../../../../../reference/runtime/host-main.cjs#L768757-L768766) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564268-564277](../../../../../../reference/runtime/sand-eval-runner.cjs#L564268-L564277) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:768757

Calls written directly in this body: `.filter`, `parts.join`, `placeNamePart`, `placePriceText`, `placeStreetOf`, `ratingPart`, `singleLine2`.

SHA-256 of the source span: `7ad86b8eed8ebcae999d4c86fdb2090a9965c9b6deed9408a43aaa72a4b0075a`.

### evaluation:564268

Calls written directly in this body: `.filter`, `parts.join`, `placeNamePart`, `placePriceText`, `placeStreetOf`, `ratingPart`, `singleLine2`.

SHA-256 of the source span: `7ad86b8eed8ebcae999d4c86fdb2090a9965c9b6deed9408a43aaa72a4b0075a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
