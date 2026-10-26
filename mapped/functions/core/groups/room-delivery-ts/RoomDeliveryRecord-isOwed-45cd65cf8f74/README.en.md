# `RoomDeliveryRecord.isOwed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737716-737718](../../../../../../reference/runtime/host-main.cjs#L737716-L737718) | `method` | no | `memberId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737716-737718](../../../../../../reference/runtime/host-main.cjs#L737716-L737718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737716

Calls written directly in this body: `isNewerThanLatestTurn`, `this.members.get`.

SHA-256 of the source span: `3112340e809ad7253266bb1d223f8d7df9be17867b16dc76b63209d6bcee8ee4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
