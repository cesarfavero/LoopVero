# `RoomDeliveryRecord.noteShown`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737739-737744](../../../../../../reference/runtime/host-main.cjs#L737739-L737744) | `method` | no | `memberId, through` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737739-737744](../../../../../../reference/runtime/host-main.cjs#L737739-L737744) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737739

Calls written directly in this body: `Math.max`, `this.delivery`.

Assignment or increment targets: `delivery.failedInARow`, `delivery.settledAt`, `delivery.shownThrough`, `this.clock`.

SHA-256 of the source span: `e163d380f36c3ad6a9081f4e9fd2c78c4a3bde63beb1d2f9cdb14d313d9a1f59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
