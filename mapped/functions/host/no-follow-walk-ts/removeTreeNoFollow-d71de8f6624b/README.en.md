# `removeTreeNoFollow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453649-453669](../../../../../reference/runtime/host-main.cjs#L453649-L453669) | `FunctionDeclaration` | yes | `parent, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453649-453669](../../../../../reference/runtime/host-main.cjs#L453649-L453669) | 2 | 1 | 6 | 2 | 1 | 1 |

### host:453649

Calls written directly in this body: `.catch`, `descriptorPathOf`, `directory.handle.close`, `entryOf`, `findSystemErrno`, `openDirectoryNoFollow2`, `removeTreeNoFollow`.

Assignment or increment targets: `directory`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `3bb21aee13f6843f6f932e9d71c0fb04cc184d657fbd1e56be7425079e9fa4a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
