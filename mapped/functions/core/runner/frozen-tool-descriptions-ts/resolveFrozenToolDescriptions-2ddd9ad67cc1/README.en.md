# `resolveFrozenToolDescriptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/frozen-tool-descriptions.ts` · [Module README](../../../../../modules/core/runner/frozen-tool-descriptions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586455-586511](../../../../../../reference/runtime/sand-eval-runner.cjs#L586455-L586511) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586455-586511](../../../../../../reference/runtime/sand-eval-runner.cjs#L586455-L586511) | 5 | 2 | 0 | 3 | 0 | 0 |

### evaluation:586455

Calls written directly in this body: `descriptions.set`, `descriptions2.set`, `new Map`, `sameRecord`, `withOptionalRecords`.

Assignment or increment targets: `drifted[computed]`, `pinned2[computed]`, `pinned[computed]`, `pinsChanged`, `schemas2[computed]`, `schemas[computed]`.

SHA-256 of the source span: `372f545a3d6e37f257558a1fcc4c4fe9893fabfb30ecf9f8df5919c662d2013c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
