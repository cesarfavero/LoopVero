# `ShipmentReader.stage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707038-707042](../../../../../../reference/runtime/host-main.cjs#L707038-L707042) | `method` | no | `value` |
| [evaluation:481184-481188](../../../../../../reference/runtime/sand-eval-runner.cjs#L481184-L481188) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707038-707042](../../../../../../reference/runtime/host-main.cjs#L707038-L707042) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481184-481188](../../../../../../reference/runtime/sand-eval-runner.cjs#L481184-L481188) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:707038

Calls written directly in this body: `SAND_SHIPMENT_STAGES.join`, `isOneOf2`, `this.error`.

SHA-256 of the source span: `941fc2cbfd294a321542e46bdd5f081c4f0fca7b65630eebf5a2bdaf5f5a8da0`.

### evaluation:481184

Calls written directly in this body: `SAND_SHIPMENT_STAGES.join`, `isOneOf`, `this.error`.

SHA-256 of the source span: `472140fcab3f7a936c2822123089a222f8df269116a5897d816e2c61bb67d40e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
