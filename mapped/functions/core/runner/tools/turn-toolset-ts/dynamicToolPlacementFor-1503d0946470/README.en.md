# `dynamicToolPlacementFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/turn-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582649-582651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582649-L582651) | `FunctionDeclaration` | no | `gates` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582649-582651](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582649-L582651) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582649

Calls written directly in this body: `gates.webFetchDisabled`.

SHA-256 of the source span: `2b8a7d06b21eedee0b7f51d5a92cc4c5855e808a24abc33cfaf727bac782c2ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
