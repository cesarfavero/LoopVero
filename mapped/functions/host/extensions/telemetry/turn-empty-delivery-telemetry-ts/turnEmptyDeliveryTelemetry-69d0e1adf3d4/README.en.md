# `turnEmptyDeliveryTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-empty-delivery-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-empty-delivery-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472329-472346](../../../../../../../reference/runtime/host-main.cjs#L472329-L472346) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472329-472346](../../../../../../../reference/runtime/host-main.cjs#L472329-L472346) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472329

Calls written directly in this body: `Math.round`, `brandedId`, `brandedOrInvalidId`, `logFields`.

SHA-256 of the source span: `97517e5cd4786e7ceb5574de98c5c276cbc2c4e38f6d35d114cd471860b3cc54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
