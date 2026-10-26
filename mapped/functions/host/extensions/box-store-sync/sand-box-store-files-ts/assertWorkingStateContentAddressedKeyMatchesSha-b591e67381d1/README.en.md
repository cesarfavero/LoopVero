# `assertWorkingStateContentAddressedKeyMatchesSha`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474687-474691](../../../../../../../reference/runtime/host-main.cjs#L474687-L474691) | `FunctionDeclaration` | no | `key, sha256` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474687-474691](../../../../../../../reference/runtime/host-main.cjs#L474687-L474691) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:474687

Calls written directly in this body: `WORKING_STATE_BLOB_KEY.exec`, `key.startsWith`, `new SandBoxStoreBlobHashMismatchError`.

Explicit throw targets: `SandBoxStoreBlobHashMismatchError`.

SHA-256 of the source span: `4bef6923aa88875c8af55d166f8f2d18b63da09fe86d5b6895f5c7c58858d963`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
