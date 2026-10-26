# `HostTelemetryService.reportMetricsFlushError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732242-732247](../../../../../../../reference/runtime/host-main.cjs#L732242-L732247) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732242-732247](../../../../../../../reference/runtime/host-main.cjs#L732242-L732247) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732242

Calls written directly in this body: `errorLogTag`, `this.logs.reportHostLog`, `this.reportedMetricsFlushErrorReasons.add`, `this.reportedMetricsFlushErrorReasons.has`.

SHA-256 of the source span: `2aa9146b9a428b2a85f1c94e7efa7e6e9b74d9e6ccc300a8236387e53a79d970`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
