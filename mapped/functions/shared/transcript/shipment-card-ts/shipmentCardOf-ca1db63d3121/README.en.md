# `shipmentCardOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707147-707166](../../../../../../reference/runtime/host-main.cjs#L707147-L707166) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707147-707166](../../../../../../reference/runtime/host-main.cjs#L707147-L707166) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:707147

Calls written directly in this body: `Number.isFinite`, `isNonEmptyString2`, `isUnknownRecord2`, `readShipmentCard`.

SHA-256 of the source span: `4ae07896d626511d9693ea5c88d4c2ab9d0e7ef1056ae9d5f58b353328fce49a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
