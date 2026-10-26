# `RoomDeliveryRecord.restore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/room-delivery.ts` · [Module README](../../../../../modules/core/groups/room-delivery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737764-737773](../../../../../../reference/runtime/host-main.cjs#L737764-L737773) | `method` | no | `snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737764-737773](../../../../../../reference/runtime/host-main.cjs#L737764-L737773) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:737764

Calls written directly in this body: `Number.isFinite`, `this.delivery`, `this.noteShown`.

Assignment or increment targets: `delivery.failedInARow`, `delivery.wokenThrough`.

SHA-256 of the source span: `da843020ae0f30644c510070ada7218bae66734de29b8827a32976fdff652f9c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
