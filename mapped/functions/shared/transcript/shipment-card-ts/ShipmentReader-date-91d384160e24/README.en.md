# `ShipmentReader.date`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707043-707055](../../../../../../reference/runtime/host-main.cjs#L707043-L707055) | `method` | no | `value` |
| [evaluation:481189-481201](../../../../../../reference/runtime/sand-eval-runner.cjs#L481189-L481201) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707043-707055](../../../../../../reference/runtime/host-main.cjs#L707043-L707055) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:481189-481201](../../../../../../reference/runtime/sand-eval-runner.cjs#L481189-L481201) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:707043

Calls written directly in this body: `Math.abs`, `shipmentDateMs`, `this.error`.

SHA-256 of the source span: `be1bd416aaac6d4411ed4f8968c2b812925355caafb9042e3e3badd1e4380f85`.

### evaluation:481189

Calls written directly in this body: `Math.abs`, `shipmentDateMs`, `this.error`.

SHA-256 of the source span: `ac96d0e65f08ed17806d49bd55d50f5839dfc2e4ec31919df08deb2010739741`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
