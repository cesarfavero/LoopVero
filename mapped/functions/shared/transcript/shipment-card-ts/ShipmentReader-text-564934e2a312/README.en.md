# `ShipmentReader.text`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707003-707018](../../../../../../reference/runtime/host-main.cjs#L707003-L707018) | `method` | no | `path33, value, rule` |
| [evaluation:481149-481164](../../../../../../reference/runtime/sand-eval-runner.cjs#L481149-L481164) | `method` | no | `path33, value, rule` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707003-707018](../../../../../../reference/runtime/host-main.cjs#L707003-L707018) | 6 | 1 | 0 | 5 | 0 | 0 |
| [evaluation:481149-481164](../../../../../../reference/runtime/sand-eval-runner.cjs#L481149-L481164) | 6 | 1 | 0 | 5 | 0 | 0 |

### host:707003

Calls written directly in this body: `.trim`, `cardTextProblems`, `normalizeCardSpaces`, `text3.slice`, `this.error`, `value.trim`.

SHA-256 of the source span: `3d3de64c5a57fee90860685f7d46de2a66693907812a5e8ced0baa6738c4f1aa`.

### evaluation:481149

Calls written directly in this body: `.trim`, `cardTextProblems`, `normalizeCardSpaces`, `text3.slice`, `this.error`, `value.trim`.

SHA-256 of the source span: `3d3de64c5a57fee90860685f7d46de2a66693907812a5e8ced0baa6738c4f1aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
