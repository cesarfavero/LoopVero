# `placesFallbackBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768767-768769](../../../../../../reference/runtime/host-main.cjs#L768767-L768769) | `FunctionDeclaration` | no | `places` |
| [evaluation:564278-564280](../../../../../../reference/runtime/sand-eval-runner.cjs#L564278-L564280) | `FunctionDeclaration` | no | `places` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768767-768769](../../../../../../reference/runtime/host-main.cjs#L768767-L768769) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564278-564280](../../../../../../reference/runtime/sand-eval-runner.cjs#L564278-L564280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768767

Calls written directly in this body: `.join`, `places.map`.

SHA-256 of the source span: `ad7bd9eb8485d41480e174763316a0e5e317a862bf7fe2bac1ce46243df9292c`.

### evaluation:564278

Calls written directly in this body: `.join`, `places.map`.

SHA-256 of the source span: `ad7bd9eb8485d41480e174763316a0e5e317a862bf7fe2bac1ce46243df9292c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
