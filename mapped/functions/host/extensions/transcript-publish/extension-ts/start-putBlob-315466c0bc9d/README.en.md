# `start/putBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript-publish/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript-publish/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784309-784312](../../../../../../../reference/runtime/host-main.cjs#L784309-L784312) | `ArrowFunctionExpression` | yes | `blobHash, bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784309-784312](../../../../../../../reference/runtime/host-main.cjs#L784309-L784312) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:784309

Calls written directly in this body: `.put`, `boxStoreSync.getStoreId`, `boxStoreSync.objectStoreProvider.forStore`.

SHA-256 of the source span: `26a47d39a44548413021e2b66fc029567930dd33ed33b09b6e647e1f3cd40e0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
