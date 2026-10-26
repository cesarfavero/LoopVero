# `AgentStoreObjectStore.put`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475251-475277](../../../../../../../reference/runtime/host-main.cjs#L475251-L475277) | `method` | yes | `key, bytes, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475251-475277](../../../../../../../reference/runtime/host-main.cjs#L475251-L475277) | 2 | 0 | 2 | 1 | 1 | 0 |

### host:475251

Calls written directly in this body: `new BoxStoreCanonicalWriteConflictError`, `putAgentStoreObject`, `putAgentStoreObjectContentAddressed`.

Explicit throw targets: `BoxStoreCanonicalWriteConflictError`.

SHA-256 of the source span: `f25e4866f517ca99e2ef69e15c53a0d45f37141e28fc32c825c123e8117b50f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
