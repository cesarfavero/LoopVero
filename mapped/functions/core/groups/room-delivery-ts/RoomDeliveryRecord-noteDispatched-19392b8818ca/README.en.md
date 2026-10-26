# `RoomDeliveryRecord.noteDispatched`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737732-737738](../../../../../../reference/runtime/host-main.cjs#L737732-L737738) | `method` | no | `memberId, through` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737732-737738](../../../../../../reference/runtime/host-main.cjs#L737732-L737738) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737732

Calls written directly in this body: `this.delivery`.

Assignment or increment targets: `delivery.dispatchedAt`, `delivery.dispatchedBefore`, `delivery.dispatchedThrough`, `delivery.settledAt`, `this.clock`.

SHA-256 of the source span: `fc1fc1a4ecc065d70bd100a93f26d10b581fb0404d0ca5ed9707050a56e49a03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
