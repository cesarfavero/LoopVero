# `startWorkingStateExport/putBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786080-786086](../../../../../../../reference/runtime/host-main.cjs#L786080-L786086) | `ArrowFunctionExpression` | yes | `blobIdHex, bytes, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786080-786086](../../../../../../../reference/runtime/host-main.cjs#L786080-L786086) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:786080

Calls written directly in this body: `.put`, `boxStoreSync.getStoreId`, `boxStoreSync.objectStoreProvider.forStore`.

SHA-256 of the source span: `6cf0e60a2a418b82ac4b328740b799bbbc88271cd5e5797a0104ef96bc6b5f5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
