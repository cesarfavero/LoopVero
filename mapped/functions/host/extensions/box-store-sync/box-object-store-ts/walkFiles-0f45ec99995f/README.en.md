# `walkFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475397-475414](../../../../../../../reference/runtime/host-main.cjs#L475397-L475414) | `FunctionDeclaration` | yes | `dir, out` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475397-475414](../../../../../../../reference/runtime/host-main.cjs#L475397-L475414) | 4 | 1 | 2 | 1 | 1 | 1 |

### host:475397

Calls written directly in this body: `entry.isDirectory`, `entry.isFile`, `entry.isSymbolicLink`, `findSystemErrno`, `out.push`, `walkFiles`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `814c009d88af516ecdf77d9e4ee4e07b1655a1982b902fbe03de9b69fafa1980`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
