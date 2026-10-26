# `DefaultBoxStoreSyncService.clearBoxStoreNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482619-482636](../../../../../../../reference/runtime/host-main.cjs#L482619-L482636) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482619-482636](../../../../../../../reference/runtime/host-main.cjs#L482619-L482636) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:482619

Calls written directly in this body: `.clearStore`, `legacy.clearStore`, `legacy.dispose`, `new AgentStoreObjectStoreProvider`, `this.accessor`, `this.agentStoreProviderDeps`, `this.createSync`.

SHA-256 of the source span: `422109dd4f13f22158834e624858aaff4844f76277ab89239b0364986d73c376`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
