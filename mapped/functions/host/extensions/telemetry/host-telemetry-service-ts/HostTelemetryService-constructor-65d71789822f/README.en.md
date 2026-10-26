# `HostTelemetryService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731973-732015](../../../../../../../reference/runtime/host-main.cjs#L731973-L732015) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731973-732015](../../../../../../../reference/runtime/host-main.cjs#L731973-L732015) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731973

Calls written directly in this body: `new GrokBotMetricsBackend`, `new SandProductAnalytics`, `new SandStructuredLogTelemetry`, `withAutomationRunAnalytics`.

Assignment or increment targets: `this.analytics`, `this.brain`, `this.logs`, `this.metrics`, `this.options`, `this.tracing`.

SHA-256 of the source span: `526aa606716e8da72588a25c06a7380d612039e4b28abb8d98bb4903d2995e2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
