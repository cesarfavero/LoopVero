# `isCriticalRelPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477534-477536](../../../../../../../reference/runtime/host-main.cjs#L477534-L477536) | `FunctionDeclaration` | no | `relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477534-477536](../../../../../../../reference/runtime/host-main.cjs#L477534-L477536) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:477534

Calls written directly in this body: `COPY_IN_CRITICAL_BASENAMES.has`, `relPath.lastIndexOf`, `relPath.slice`.

SHA-256 of the source span: `a71cab6b5c8c49545db788648f50b6fe6bdabb95171c2d31ea19eb8211314a6a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
