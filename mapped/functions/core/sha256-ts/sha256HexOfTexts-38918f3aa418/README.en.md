# `sha256HexOfTexts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/sha256.ts` · [Module README](../../../../modules/core/sha256-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:536068-536075](../../../../../reference/runtime/sand-eval-runner.cjs#L536068-L536075) | `FunctionDeclaration` | no | `parts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536068-536075](../../../../../reference/runtime/sand-eval-runner.cjs#L536068-L536075) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:536068

Calls written directly in this body: `hash2.digest`, `hash2.update`.

SHA-256 of the source span: `9fd6ad4bee5f2143f5f889ecbd61c059f5f74333a439c5bcf133e17354d5b3c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
