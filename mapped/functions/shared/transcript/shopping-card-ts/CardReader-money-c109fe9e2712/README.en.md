# `CardReader.money`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shopping-card.ts` · [Module README](../../../../../modules/shared/transcript/shopping-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707328-707347](../../../../../../reference/runtime/host-main.cjs#L707328-L707347) | `method` | no | `path33, value` |
| [evaluation:481450-481469](../../../../../../reference/runtime/sand-eval-runner.cjs#L481450-L481469) | `method` | no | `path33, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707328-707347](../../../../../../reference/runtime/host-main.cjs#L707328-L707347) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:481450-481469](../../../../../../reference/runtime/sand-eval-runner.cjs#L481450-L481469) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:707328

Calls written directly in this body: `.has`, `CURRENCY.test`, `Number.isFinite`, `isoCurrencies`, `this.error`, `this.record`.

SHA-256 of the source span: `cb5d65d6701c44437cb51c859af8f271d25e1a33d4ceff1adbed191ee54c7763`.

### evaluation:481450

Calls written directly in this body: `.has`, `CURRENCY.test`, `Number.isFinite`, `isoCurrencies`, `this.error`, `this.record`.

SHA-256 of the source span: `cb5d65d6701c44437cb51c859af8f271d25e1a33d4ceff1adbed191ee54c7763`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
