# `ShipmentReader.items`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/shipment-card.ts` · [Module README](../../../../../modules/shared/transcript/shipment-card-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:707082-707094](../../../../../../reference/runtime/host-main.cjs#L707082-L707094) | `method` | no | `value` |
| [evaluation:481228-481240](../../../../../../reference/runtime/sand-eval-runner.cjs#L481228-L481240) | `method` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707082-707094](../../../../../../reference/runtime/host-main.cjs#L707082-L707094) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:481228-481240](../../../../../../reference/runtime/sand-eval-runner.cjs#L481228-L481240) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:707082

Calls written directly in this body: `.flatMap`, `Array.isArray`, `this.error`, `value.slice`.

SHA-256 of the source span: `f75d12e5a1f664b6b63051fc1798fd3f701a51bae907005cd56d019eb61506e4`.

### evaluation:481228

Calls written directly in this body: `.flatMap`, `Array.isArray`, `this.error`, `value.slice`.

SHA-256 of the source span: `f75d12e5a1f664b6b63051fc1798fd3f701a51bae907005cd56d019eb61506e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
