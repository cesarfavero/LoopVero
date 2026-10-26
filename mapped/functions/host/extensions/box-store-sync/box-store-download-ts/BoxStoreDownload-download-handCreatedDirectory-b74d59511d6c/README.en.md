# `BoxStoreDownload.download/handCreatedDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477658-477665](../../../../../../../reference/runtime/host-main.cjs#L477658-L477665) | `ArrowFunctionExpression` | yes | `directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477658-477665](../../../../../../../reference/runtime/host-main.cjs#L477658-L477665) | 3 | 0 | 3 | 1 | 0 | 0 |

### host:477658

Calls written directly in this body: `directory.handle.chown`, `directory.handle.stat`, `mayHandOverTo`, `options2.chown`.

SHA-256 of the source span: `e3527d65380e12b98fea066c9a47d770f2a6f41501376d8db35905a907e0f548`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
