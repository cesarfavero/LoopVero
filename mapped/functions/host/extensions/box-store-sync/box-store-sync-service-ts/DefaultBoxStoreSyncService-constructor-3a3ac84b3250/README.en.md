# `DefaultBoxStoreSyncService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482454-482486](../../../../../../../reference/runtime/host-main.cjs#L482454-L482486) | `method` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482454-482486](../../../../../../../reference/runtime/host-main.cjs#L482454-L482486) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:482454

Calls written directly in this body: `buildBoxStoreCategories`, `deps.clock.monotonicNow`, `getSandRootDir`, `resolveBoxObjectStoreProvider`, `this.agentStoreProviderDeps`, `this.createSync`.

Assignment or increment targets: `this.api`, `this.backendPolicy`, `this.deps`, `this.lastChromeSyncMs`, `this.sandRoot`, `this.sync`.

SHA-256 of the source span: `c94e31a291498cc9ce6b8c18528602c3a3f31bd2d4a390314f077a0c9fef2d92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
