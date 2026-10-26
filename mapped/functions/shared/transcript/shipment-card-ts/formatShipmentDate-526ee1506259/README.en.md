# `formatShipmentDate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707173-707182](../../../../../../reference/runtime/host-main.cjs#L707173-L707182) | `FunctionDeclaration` | no | `date6, locale = "en-US"` |
| [evaluation:481296-481305](../../../../../../reference/runtime/sand-eval-runner.cjs#L481296-L481305) | `FunctionDeclaration` | no | `date6, locale = "en-US"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707173-707182](../../../../../../reference/runtime/host-main.cjs#L707173-L707182) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481296-481305](../../../../../../reference/runtime/sand-eval-runner.cjs#L481296-L481305) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:707173

Calls written directly in this body: `.format`, `new Intl.DateTimeFormat`, `shipmentDateMs`.

SHA-256 of the source span: `97d28af10208e6b897d0b3bfc8b527e07bee9487ff42e9c9cafb1a1758bdc6bb`.

### evaluation:481296

Calls written directly in this body: `.format`, `new Intl.DateTimeFormat`, `shipmentDateMs`.

SHA-256 of the source span: `97d28af10208e6b897d0b3bfc8b527e07bee9487ff42e9c9cafb1a1758bdc6bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
