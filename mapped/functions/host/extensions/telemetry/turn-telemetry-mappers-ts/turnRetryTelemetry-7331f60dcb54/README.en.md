# `turnRetryTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472414-472428](../../../../../../../reference/runtime/host-main.cjs#L472414-L472428) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472414-472428](../../../../../../../reference/runtime/host-main.cjs#L472414-L472428) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472414

Calls written directly in this body: `Math.round`, `brandedOrInvalidId`, `logFields`, `privacyModeRetryErrorProjection`.

SHA-256 of the source span: `5b3d86cf5e951b761b65dda3fab0060fdd85f4eca4ef1d9ad5c371b5dce30c72`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
