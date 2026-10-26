# `BoxStoreDownload.download/withRestoreParent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477716-477723](../../../../../../../reference/runtime/host-main.cjs#L477716-L477723) | `ArrowFunctionExpression` | yes | `destPath, operation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477716-477723](../../../../../../../reference/runtime/host-main.cjs#L477716-L477723) | 0 | 0 | 3 | 1 | 0 | 0 |

### host:477716

Calls written directly in this body: `openRestoreParent`, `operation`, `parent.handle.close`.

SHA-256 of the source span: `b8d5d0bde6192de630cce352f01b2789f051e2042f7e93dc6b21ae42036d47e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
