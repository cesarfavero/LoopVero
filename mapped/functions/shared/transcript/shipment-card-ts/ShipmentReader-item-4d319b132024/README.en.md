# `ShipmentReader.item`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707056-707081](../../../../../../reference/runtime/host-main.cjs#L707056-L707081) | `method` | no | `path33, value` |
| [evaluation:481202-481227](../../../../../../reference/runtime/sand-eval-runner.cjs#L481202-L481227) | `method` | no | `path33, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707056-707081](../../../../../../reference/runtime/host-main.cjs#L707056-L707081) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481202-481227](../../../../../../reference/runtime/sand-eval-runner.cjs#L481202-L481227) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:707056

Calls written directly in this body: `Number.isInteger`, `this.error`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `quantity`.

SHA-256 of the source span: `2bbc4e15a78231432f935acb849d5db27bcd761e53c517384e134e0f05c1f198`.

### evaluation:481202

Calls written directly in this body: `Number.isInteger`, `this.error`, `this.record`, `this.text`, `this.url`.

Assignment or increment targets: `quantity`.

SHA-256 of the source span: `2bbc4e15a78231432f935acb849d5db27bcd761e53c517384e134e0f05c1f198`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
