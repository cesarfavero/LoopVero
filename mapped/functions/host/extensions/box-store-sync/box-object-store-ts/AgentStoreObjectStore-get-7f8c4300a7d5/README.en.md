# `AgentStoreObjectStore.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475240-475250](../../../../../../../reference/runtime/host-main.cjs#L475240-L475250) | `method` | yes | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475240-475250](../../../../../../../reference/runtime/host-main.cjs#L475240-L475250) | 2 | 0 | 1 | 2 | 0 | 1 |

### host:475240

Calls written directly in this body: `fetchAgentStoreObjectFromUrl`, `getAgentStoreObject`, `this.takePrefetchedRead`.

SHA-256 of the source span: `36573aa9bf87fd9e6359e48a213d0fd6f6d50637f328a29238c221933a23a1af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
