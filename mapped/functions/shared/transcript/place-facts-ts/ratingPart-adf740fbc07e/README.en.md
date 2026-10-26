# `ratingPart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768750-768756](../../../../../../reference/runtime/host-main.cjs#L768750-L768756) | `FunctionDeclaration` | no | `place` |
| [evaluation:564261-564267](../../../../../../reference/runtime/sand-eval-runner.cjs#L564261-L564267) | `FunctionDeclaration` | no | `place` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768750-768756](../../../../../../reference/runtime/host-main.cjs#L768750-L768756) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564261-564267](../../../../../../reference/runtime/sand-eval-runner.cjs#L564261-L564267) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:768750

Calls written directly in this body: `formatCompactCount`, `formatPlaceRating`, `placeRatingValue`.

SHA-256 of the source span: `cb5a5f7e18904168488934377c7deb7bbf5f96a12043766fd6ae1e253e9e0c64`.

### evaluation:564261

Calls written directly in this body: `formatCompactCount`, `formatPlaceRating`, `placeRatingValue`.

SHA-256 of the source span: `cb5a5f7e18904168488934377c7deb7bbf5f96a12043766fd6ae1e253e9e0c64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
