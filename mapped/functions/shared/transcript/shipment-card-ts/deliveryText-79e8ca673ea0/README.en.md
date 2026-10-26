# `deliveryText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707211-707217](../../../../../../reference/runtime/host-main.cjs#L707211-L707217) | `FunctionDeclaration` | no | `card` |
| [evaluation:481334-481340](../../../../../../reference/runtime/sand-eval-runner.cjs#L481334-L481340) | `FunctionDeclaration` | no | `card` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707211-707217](../../../../../../reference/runtime/host-main.cjs#L707211-L707217) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481334-481340](../../../../../../reference/runtime/sand-eval-runner.cjs#L481334-L481340) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:707211

Calls written directly in this body: `formatShipmentDate`, `shipmentDeliveryLine`.

SHA-256 of the source span: `168ccbcc4d340b7aa80443e97e5308d02767f264fced29d159d84c0f5c64e43b`.

### evaluation:481334

Calls written directly in this body: `formatShipmentDate`, `shipmentDeliveryLine`.

SHA-256 of the source span: `168ccbcc4d340b7aa80443e97e5308d02767f264fced29d159d84c0f5c64e43b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
