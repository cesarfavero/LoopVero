# `SandStructuredLogTelemetry.reportHostExtensionDiagnostic`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473206-473209](../../../../../../../reference/runtime/host-main.cjs#L473206-L473209) | `method` | no | `diagnostic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473206-473209](../../../../../../../reference/runtime/host-main.cjs#L473206-L473209) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473206

Calls written directly in this body: `hostExtensionDiagnosticTelemetry`, `this.enqueue`.

SHA-256 of the source span: `22eab53b6f6a22a80fb87860f198d9e66e8af84eb2e700d261c63ed32c0eb23e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
