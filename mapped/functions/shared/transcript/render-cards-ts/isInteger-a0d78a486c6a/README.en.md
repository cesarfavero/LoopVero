# `isInteger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/render-cards.ts` · [Module README](../../../../../modules/shared/transcript/render-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707802-707804](../../../../../../reference/runtime/host-main.cjs#L707802-L707804) | `FunctionDeclaration` | no | `value` |
| [evaluation:564289-564291](../../../../../../reference/runtime/sand-eval-runner.cjs#L564289-L564291) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707802-707804](../../../../../../reference/runtime/host-main.cjs#L707802-L707804) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564289-564291](../../../../../../reference/runtime/sand-eval-runner.cjs#L564289-L564291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707802

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `486e0ff90f14310ebff4cc96f9b81595faf221ebc9dea51d53d66ef371af6130`.

### evaluation:564289

Calls written directly in this body: `Number.isInteger`.

SHA-256 of the source span: `486e0ff90f14310ebff4cc96f9b81595faf221ebc9dea51d53d66ef371af6130`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
