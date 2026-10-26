# `copyFileHashing/transform`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-download.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:478370-478379](../../../../../../../reference/runtime/host-main.cjs#L478370-L478379) | `FunctionExpression` | no | `chunk, _encoding, callback` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478370-478379](../../../../../../../reference/runtime/host-main.cjs#L478370-L478379) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:478370

Calls written directly in this body: `.then`, `Buffer.from`, `Buffer.isBuffer`, `callback`, `hash2.update`, `onChunk`.

Assignment or increment targets: `size`.

SHA-256 of the source span: `fd1c33e5b6e40ebe56b02147d27ca907b5656668563562df3026fde180eedc56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
