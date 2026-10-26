# `RoomDeliveryRecord.unseen`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737719-737731](../../../../../../reference/runtime/host-main.cjs#L737719-L737731) | `method` | no | `memberId, history` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737719-737731](../../../../../../reference/runtime/host-main.cjs#L737719-L737731) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737719

Calls written directly in this body: `history.forEach`, `lastOwnPosition`, `this.members.get`.

SHA-256 of the source span: `7b53bffc90cf4607387e605ef41dfcced13a9960ccdd155ae96f6e7d9cac9aab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
