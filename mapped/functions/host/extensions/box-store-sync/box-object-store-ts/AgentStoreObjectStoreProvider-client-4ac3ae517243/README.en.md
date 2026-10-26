# `AgentStoreObjectStoreProvider.client`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-object-store.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475200-475213](../../../../../../../reference/runtime/host-main.cjs#L475200-L475213) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475200-475213](../../../../../../../reference/runtime/host-main.cjs#L475200-L475213) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475200

Calls written directly in this body: `createAgentStoreClient`.

Assignment or increment targets: `this.clientInstance`.

SHA-256 of the source span: `53537e254b3f87046e6d67f5d0129f07c6382c1284dabd91e3c1f45503ff3911`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
