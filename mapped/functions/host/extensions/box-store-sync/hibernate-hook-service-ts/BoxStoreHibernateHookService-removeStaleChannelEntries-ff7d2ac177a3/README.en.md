# `BoxStoreHibernateHookService.removeStaleChannelEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/hibernate-hook-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/hibernate-hook-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482058-482068](../../../../../../../reference/runtime/host-main.cjs#L482058-L482068) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482058-482068](../../../../../../../reference/runtime/host-main.cjs#L482058-L482068) | 1 | 1 | 0 | 0 | 0 | 1 |

### host:482058

Calls written directly in this body: `entry.startsWith`, `errorMessage`, `this.deps.log`, `this.requestFifoPresent`.

SHA-256 of the source span: `11844b114f853870142524f2437cbab0bf9597391342580e57d623568363a29c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
