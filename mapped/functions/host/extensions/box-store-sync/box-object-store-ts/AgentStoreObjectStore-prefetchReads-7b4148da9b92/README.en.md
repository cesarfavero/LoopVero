# `AgentStoreObjectStore.prefetchReads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475228-475233](../../../../../../../reference/runtime/host-main.cjs#L475228-L475233) | `method` | yes | `keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475228-475233](../../../../../../../reference/runtime/host-main.cjs#L475228-L475233) | 0 | 1 | 1 | 0 | 0 | 0 |

### host:475228

Calls written directly in this body: `presignAgentStoreReadBatch`, `this.prefetchedReads.set`.

SHA-256 of the source span: `17042f272fdf7483167f3f3ee5b84de3c25167d9a6f7b36cb62f986cdc9913c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
