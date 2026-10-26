# `formatLinkItemPrice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/link-item-price.ts` · [Module README](../../../../../modules/shared/transcript/link-item-price-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:741053-741059](../../../../../../reference/runtime/host-main.cjs#L741053-L741059) | `FunctionDeclaration` | no | `price, locale` |
| [evaluation:482000-482006](../../../../../../reference/runtime/sand-eval-runner.cjs#L482000-L482006) | `FunctionDeclaration` | no | `price, locale` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741053-741059](../../../../../../reference/runtime/host-main.cjs#L741053-L741059) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:482000-482006](../../../../../../reference/runtime/sand-eval-runner.cjs#L482000-L482006) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:741053

Calls written directly in this body: `.format`, `ISO_4217_CODE.test`, `Number.isFinite`, `new Intl.NumberFormat`.

SHA-256 of the source span: `75aa2a8d1bcbdb2133ba0c84cf9a9799198248ea11a9534d285a5111c6cd7e0b`.

### evaluation:482000

Calls written directly in this body: `.format`, `ISO_4217_CODE.test`, `Number.isFinite`, `new Intl.NumberFormat`.

SHA-256 of the source span: `75aa2a8d1bcbdb2133ba0c84cf9a9799198248ea11a9534d285a5111c6cd7e0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
