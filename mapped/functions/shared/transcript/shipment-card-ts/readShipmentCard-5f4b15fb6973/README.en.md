# `readShipmentCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707109-707143](../../../../../../reference/runtime/host-main.cjs#L707109-L707143) | `FunctionDeclaration` | no | `value, options2 = {}` |
| [evaluation:481255-481289](../../../../../../reference/runtime/sand-eval-runner.cjs#L481255-L481289) | `FunctionDeclaration` | no | `value, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707109-707143](../../../../../../reference/runtime/host-main.cjs#L707109-L707143) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481255-481289](../../../../../../reference/runtime/sand-eval-runner.cjs#L481255-L481289) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:707109

Calls written directly in this body: `Date.now`, `new ShipmentReader`, `reader.date`, `reader.items`, `reader.merchant`, `reader.record`, `reader.stage`, `reader.text`, `reader.tracking`.

SHA-256 of the source span: `f36a7fb3cf05399cb6002ace91887b422a32dd8035a7a67cec69a563ed08731b`.

### evaluation:481255

Calls written directly in this body: `Date.now`, `new ShipmentReader`, `reader.date`, `reader.items`, `reader.merchant`, `reader.record`, `reader.stage`, `reader.text`, `reader.tracking`.

SHA-256 of the source span: `f36a7fb3cf05399cb6002ace91887b422a32dd8035a7a67cec69a563ed08731b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
