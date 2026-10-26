# `AgentStoreObjectStoreProvider.forStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475197-475199](../../../../../../../reference/runtime/host-main.cjs#L475197-L475199) | `method` | no | `storeId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475197-475199](../../../../../../../reference/runtime/host-main.cjs#L475197-L475199) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475197

Calls written directly in this body: `new AgentStoreObjectStore`, `this.client`.

SHA-256 of the source span: `934118d804e38f77e400970e7e4b54b5d38137675b327c65d5c778bc8d14ce2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
