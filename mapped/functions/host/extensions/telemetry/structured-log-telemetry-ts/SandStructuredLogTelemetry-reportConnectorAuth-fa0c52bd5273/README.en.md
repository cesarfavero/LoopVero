# `SandStructuredLogTelemetry.reportConnectorAuth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473275-473278](../../../../../../../reference/runtime/host-main.cjs#L473275-L473278) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473275-473278](../../../../../../../reference/runtime/host-main.cjs#L473275-L473278) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473275

Calls written directly in this body: `connectorAuthTelemetry`, `this.enqueue`.

SHA-256 of the source span: `8dd093410f44adc67c327ab3dfdf8685dd73dd6e9a99f54265d7a55e9ffce7d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
