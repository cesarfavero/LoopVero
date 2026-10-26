# `BoxStoreDownload.download/localSymlinkMatches`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477845-477856](../../../../../../../reference/runtime/host-main.cjs#L477845-L477856) | `ArrowFunctionExpression` | yes | `destEntry, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477845-477856](../../../../../../../reference/runtime/host-main.cjs#L477845-L477856) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:477845

Calls written directly in this body: `.then`, `info2.isSymbolicLink`.

SHA-256 of the source span: `59312c6ac4158895a721dbd582aeb34831f3df46b9412d6b41c955b42313cbff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
