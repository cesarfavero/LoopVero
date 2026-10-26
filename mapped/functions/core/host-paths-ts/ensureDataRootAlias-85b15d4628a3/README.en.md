# `ensureDataRootAlias`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430869-430880](../../../../../reference/runtime/host-main.cjs#L430869-L430880) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430869-430880](../../../../../reference/runtime/host-main.cjs#L430869-L430880) | 3 | 0 | 4 | 1 | 1 | 0 |

### host:430869

Calls written directly in this body: `existing.isSymbolicLink`, `lstatIfExists`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `45c8ca67862bcfef97bcf6f311c2779b793350ae0bf014e0b2371d2c2a74295e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
