# `DefaultBoxStoreSyncService.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482505-482545](../../../../../../../reference/runtime/host-main.cjs#L482505-L482545) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482505-482545](../../../../../../../reference/runtime/host-main.cjs#L482505-L482545) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:482505

Calls written directly in this body: `.catch`, `.then`, `createHibernateHook`, `new ChromeSessionWatcher`, `this.chromeSessionWatcher.start`, `this.deps.log`, `this.deps.polling.start`, `this.deps.telemetry.reportBoxStoreSyncStartup`, `this.hibernateHook.start`, `this.sync.sweepLeakedTemps`.

Assignment or increment targets: `this.chromeSessionWatcher`, `this.hibernateHook`, `this.pollingHandle`, `this.started`.

SHA-256 of the source span: `5eb3be5d1cf4517870baa30728772aea3980a04461c9c19a03b5ec84c9377e4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
