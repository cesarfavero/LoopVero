# `DefaultBoxStoreSyncService.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482546-482558](../../../../../../../reference/runtime/host-main.cjs#L482546-L482558) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482546-482558](../../../../../../../reference/runtime/host-main.cjs#L482546-L482558) | 1 | 0 | 3 | 0 | 0 | 0 |

### host:482546

Calls written directly in this body: `this.accessorInstance.dispose`, `this.chromeSessionWatcher.stop`, `this.hibernateHook.dispose`, `this.pollingHandle.dispose`, `this.sync.dispose`.

Assignment or increment targets: `this.accessorInstance`, `this.chromeSessionWatcher`, `this.hibernateHook`, `this.pollingHandle`.

SHA-256 of the source span: `28223ba7addc0fbe024b9de9b5cf8965fa4e392d5c21ef7cb7797bef018465a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
