# `DefaultBoxStoreSyncService.runCycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482637-482655](../../../../../../../reference/runtime/host-main.cjs#L482637-L482655) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482637-482655](../../../../../../../reference/runtime/host-main.cjs#L482637-L482655) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:482637

Calls written directly in this body: `.catch`, `this.deps.clock.monotonicNow`, `this.deps.isIdle`, `this.sync.snapshotNow`.

Assignment or increment targets: `this.lastChromeSyncMs`.

SHA-256 of the source span: `f53f5bcdd36c91e3e5dd1489758722b9407a49a9663177f5d7cf72080e297d13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
