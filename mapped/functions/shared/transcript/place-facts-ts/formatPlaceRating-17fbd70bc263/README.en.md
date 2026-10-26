# `formatPlaceRating`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768719-768724](../../../../../../reference/runtime/host-main.cjs#L768719-L768724) | `FunctionDeclaration` | no | `rating, locale` |
| [evaluation:564230-564235](../../../../../../reference/runtime/sand-eval-runner.cjs#L564230-L564235) | `FunctionDeclaration` | no | `rating, locale` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768719-768724](../../../../../../reference/runtime/host-main.cjs#L768719-L768724) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564230-564235](../../../../../../reference/runtime/sand-eval-runner.cjs#L564230-L564235) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768719

Calls written directly in this body: `.format`, `new Intl.NumberFormat`.

SHA-256 of the source span: `15889cb385d58909fc30b8981bef7c3f2b3425e94c408ac1e9b1d3f0777f1ae8`.

### evaluation:564230

Calls written directly in this body: `.format`, `new Intl.NumberFormat`.

SHA-256 of the source span: `15889cb385d58909fc30b8981bef7c3f2b3425e94c408ac1e9b1d3f0777f1ae8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
