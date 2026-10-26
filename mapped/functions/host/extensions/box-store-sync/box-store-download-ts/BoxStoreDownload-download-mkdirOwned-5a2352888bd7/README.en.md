# `BoxStoreDownload.download/mkdirOwned`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477724-477727](../../../../../../../reference/runtime/host-main.cjs#L477724-L477727) | `ArrowFunctionExpression` | yes | `dir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477724-477727](../../../../../../../reference/runtime/host-main.cjs#L477724-L477727) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:477724

Calls written directly in this body: `directory.handle.close`, `openRestoreParent`.

SHA-256 of the source span: `f66975c58fc46fa75a4d8d2f40b24837d3c155d9aee2ae5496468a24dbf4f0d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
