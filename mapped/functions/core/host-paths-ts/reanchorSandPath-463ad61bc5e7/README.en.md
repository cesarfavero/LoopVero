# `reanchorSandPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/host-paths.ts` · [Module README](../../../../modules/core/host-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430924-430934](../../../../../reference/runtime/host-main.cjs#L430924-L430934) | `FunctionDeclaration` | no | `storedPath, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430924-430934](../../../../../reference/runtime/host-main.cjs#L430924-L430934) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:430924

Calls written directly in this body: `getSandRootDir`, `isPathWithin`, `sandDataRelativeTail`, `segments.some`, `tail.split`.

SHA-256 of the source span: `facff1d85d2f64e80d9828a5ef3dbf4fc1b608f263bc90436536304d7f088f02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
