# `placePriceText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/place-facts.ts` · [Module README](../../../../../modules/shared/transcript/place-facts-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768711-768714](../../../../../../reference/runtime/host-main.cjs#L768711-L768714) | `FunctionDeclaration` | no | `level` |
| [evaluation:564222-564225](../../../../../../reference/runtime/sand-eval-runner.cjs#L564222-L564225) | `FunctionDeclaration` | no | `level` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768711-768714](../../../../../../reference/runtime/host-main.cjs#L768711-L768714) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564222-564225](../../../../../../reference/runtime/sand-eval-runner.cjs#L564222-L564225) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:768711

Calls written directly in this body: `$.repeat`, `placePriceTier`.

SHA-256 of the source span: `5370b2b1adf9fb07e7e2a25be5bda3c91f07b030b862a5cfe9fc8afa160225ae`.

### evaluation:564222

Calls written directly in this body: `$.repeat`, `placePriceTier`.

SHA-256 of the source span: `5370b2b1adf9fb07e7e2a25be5bda3c91f07b030b862a5cfe9fc8afa160225ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
