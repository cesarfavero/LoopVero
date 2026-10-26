# `isPlacePhoto`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707834-707836](../../../../../../reference/runtime/host-main.cjs#L707834-L707836) | `FunctionDeclaration` | no | `value` |
| [evaluation:564321-564323](../../../../../../reference/runtime/sand-eval-runner.cjs#L564321-L564323) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707834-707836](../../../../../../reference/runtime/host-main.cjs#L707834-L707836) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564321-564323](../../../../../../reference/runtime/sand-eval-runner.cjs#L564321-L564323) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707834

Calls written directly in this body: `Array.isArray`, `isHttpsUrl3`, `isOptional`, `isUnknownRecord2`, `value.authors.every`.

SHA-256 of the source span: `d404df38a5b52553ab40153a328c2fdf2eaa9080218f8dc8b2c951ebc91dc8fb`.

### evaluation:564321

Calls written directly in this body: `Array.isArray`, `isHttpsUrl3`, `isOptional`, `isUnknownRecord2`, `value.authors.every`.

SHA-256 of the source span: `d404df38a5b52553ab40153a328c2fdf2eaa9080218f8dc8b2c951ebc91dc8fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
