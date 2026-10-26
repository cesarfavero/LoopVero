# `diskPressureTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/disk-pressure-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/disk-pressure-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456234-456246](../../../../../../../reference/runtime/host-main.cjs#L456234-L456246) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456234-456246](../../../../../../../reference/runtime/host-main.cjs#L456234-L456246) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:456234

Calls written directly in this body: `Math.round`, `brandLiteralEnum`, `logFields`, `telemetryLevel`.

SHA-256 of the source span: `86d9530b7442a08bd166610a41f633729628ad8b70ccd895f3cfc4af81a59640`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
