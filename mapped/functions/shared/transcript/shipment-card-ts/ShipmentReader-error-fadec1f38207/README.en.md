# `ShipmentReader.error`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706995-706997](../../../../../../reference/runtime/host-main.cjs#L706995-L706997) | `method` | no | `message` |
| [evaluation:481141-481143](../../../../../../reference/runtime/sand-eval-runner.cjs#L481141-L481143) | `method` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706995-706997](../../../../../../reference/runtime/host-main.cjs#L706995-L706997) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:481141-481143](../../../../../../reference/runtime/sand-eval-runner.cjs#L481141-L481143) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:706995

Calls written directly in this body: `this.errors.push`.

SHA-256 of the source span: `85d4917f7389688621844189a4e8274441e2a1d91830a4ef3528236b4b30533c`.

### evaluation:481141

Calls written directly in this body: `this.errors.push`.

SHA-256 of the source span: `85d4917f7389688621844189a4e8274441e2a1d91830a4ef3528236b4b30533c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
