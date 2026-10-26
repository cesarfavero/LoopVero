# `isPlaceLocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707825-707827](../../../../../../reference/runtime/host-main.cjs#L707825-L707827) | `FunctionDeclaration` | no | `value` |
| [evaluation:564312-564314](../../../../../../reference/runtime/sand-eval-runner.cjs#L564312-L564314) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707825-707827](../../../../../../reference/runtime/host-main.cjs#L707825-L707827) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564312-564314](../../../../../../reference/runtime/sand-eval-runner.cjs#L564312-L564314) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707825

Calls written directly in this body: `Math.abs`, `isFiniteNumber`, `isUnknownRecord2`.

SHA-256 of the source span: `b5d32eb152dc53dec1bfedaee2215fb25e9337767e682e7debf93a4242d0aee0`.

### evaluation:564312

Calls written directly in this body: `Math.abs`, `isFiniteNumber`, `isUnknownRecord2`.

SHA-256 of the source span: `b5d32eb152dc53dec1bfedaee2215fb25e9337767e682e7debf93a4242d0aee0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
