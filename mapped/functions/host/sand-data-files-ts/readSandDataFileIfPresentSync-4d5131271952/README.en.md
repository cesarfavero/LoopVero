# `readSandDataFileIfPresentSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453748-453757](../../../../../reference/runtime/host-main.cjs#L453748-L453757) | `FunctionDeclaration` | no | `path33, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453748-453757](../../../../../reference/runtime/host-main.cjs#L453748-L453757) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:453748

Calls written directly in this body: `findSystemErrno`, `openNoFollowSync2`, `readOpenSandDataFile`, `sandDataNoFollowRoot`.

Assignment or increment targets: `fd`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `8329c8e47771c927841521c8525666c473f19c7aabcd3014085096e1efce6237`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
