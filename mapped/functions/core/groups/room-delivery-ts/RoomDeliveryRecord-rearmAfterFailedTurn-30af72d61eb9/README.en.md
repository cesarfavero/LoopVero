# `RoomDeliveryRecord.rearmAfterFailedTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737748-737755](../../../../../../reference/runtime/host-main.cjs#L737748-L737755) | `method` | no | `memberId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737748-737755](../../../../../../reference/runtime/host-main.cjs#L737748-L737755) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:737748

Calls written directly in this body: `this.delivery`.

Assignment or increment targets: `delivery.dispatchedThrough`, `delivery.failedInARow`, `delivery.settledAt`, `this.clock`.

SHA-256 of the source span: `c481f929afca02d02537ed4ad96d5f51f82086a6975630cae89987fe11b1dc2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
