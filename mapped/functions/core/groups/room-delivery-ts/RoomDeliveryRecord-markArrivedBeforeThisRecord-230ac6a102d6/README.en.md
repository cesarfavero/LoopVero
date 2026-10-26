# `RoomDeliveryRecord.markArrivedBeforeThisRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737689-737691](../../../../../../reference/runtime/host-main.cjs#L737689-L737691) | `method` | no | `position` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737689-737691](../../../../../../reference/runtime/host-main.cjs#L737689-L737691) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:737689

Calls written directly in this body: `Math.max`.

Assignment or increment targets: `this.judgedThrough`.

SHA-256 of the source span: `1000837871b30233fe956477e17ce2deca2cad7a5f6dd5a5501f6bce7d6c35c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
