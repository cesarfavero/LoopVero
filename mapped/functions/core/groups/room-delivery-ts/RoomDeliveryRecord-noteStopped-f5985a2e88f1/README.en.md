# `RoomDeliveryRecord.noteStopped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737745-737747](../../../../../../reference/runtime/host-main.cjs#L737745-L737747) | `method` | no | `memberId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737745-737747](../../../../../../reference/runtime/host-main.cjs#L737745-L737747) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737745

Calls written directly in this body: `this.delivery`.

Assignment or increment targets: `.settledAt`, `this.clock`.

SHA-256 of the source span: `14e95794f7d4af9be78955b75f2a20f5c7c22f50b31c734c452eb7a9eb53d2c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
