# `DefaultBoxStoreSyncService.agentStoreProviderDeps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482498-482504](../../../../../../../reference/runtime/host-main.cjs#L482498-L482504) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482498-482504](../../../../../../../reference/runtime/host-main.cjs#L482498-L482504) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:482498

Calls written directly in this body: `this.deps.getAgentStoreRpcService`.

SHA-256 of the source span: `6ef3dfb4e2e701499061904eab261331418536fb52aac4180e47b2b2aa1b91a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
