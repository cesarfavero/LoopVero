# `isPlaceOpeningHours`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707822-707824](../../../../../../reference/runtime/host-main.cjs#L707822-L707824) | `FunctionDeclaration` | no | `value` |
| [evaluation:564309-564311](../../../../../../reference/runtime/sand-eval-runner.cjs#L564309-L564311) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707822-707824](../../../../../../reference/runtime/host-main.cjs#L707822-L707824) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564309-564311](../../../../../../reference/runtime/sand-eval-runner.cjs#L564309-L564311) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707822

Calls written directly in this body: `Array.isArray`, `isOptional`, `isUnknownRecord2`, `value.weekdayDescriptions.every`.

SHA-256 of the source span: `b926a6f27a125dcc97eba1f6d580bc0c8af02d342dc18e6b3bba5a09767dab8f`.

### evaluation:564309

Calls written directly in this body: `Array.isArray`, `isOptional`, `isUnknownRecord2`, `value.weekdayDescriptions.every`.

SHA-256 of the source span: `b926a6f27a125dcc97eba1f6d580bc0c8af02d342dc18e6b3bba5a09767dab8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
