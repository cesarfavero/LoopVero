# `BoxStoreDownload.download/existingRegularFileMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:477750-477759](../../../../../../../reference/runtime/host-main.cjs#L477750-L477759) | `ArrowFunctionExpression` | yes | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477750-477759](../../../../../../../reference/runtime/host-main.cjs#L477750-L477759) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:477750

Calls written directly in this body: `.then`, `destination.isFile`.

SHA-256 of the source span: `b5608be219a2c548b0158883b1c8aa9b5362d75eb7e50d243230e4e58a93580c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
