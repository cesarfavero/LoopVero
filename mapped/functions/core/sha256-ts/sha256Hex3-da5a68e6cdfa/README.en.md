# `sha256Hex3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/sha256.ts` · [Module README](../../../../modules/core/sha256-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536062-536064](../../../../../reference/runtime/sand-eval-runner.cjs#L536062-L536064) | `FunctionDeclaration` | no | `data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536062-536064](../../../../../reference/runtime/sand-eval-runner.cjs#L536062-L536064) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:536062

Calls written directly in this body: `.digest`, `.update`.

SHA-256 of the source span: `488cbb536993a600872e5694900b950c47902e779e33113649c79164ab7611e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
