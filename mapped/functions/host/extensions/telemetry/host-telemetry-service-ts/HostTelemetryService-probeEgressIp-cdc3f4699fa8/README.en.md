# `HostTelemetryService.probeEgressIp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732248-732266](../../../../../../../reference/runtime/host-main.cjs#L732248-L732266) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732248-732266](../../../../../../../reference/runtime/host-main.cjs#L732248-L732266) | 3 | 0 | 1 | 3 | 0 | 1 |

### host:732248

Calls written directly in this body: `errorLogTag`, `probeEgressIpHash`, `this.analytics.setEgressIpHash`, `this.logs.reportHostLog`, `this.logs.setEgressIpHash`, `this.options.experiments.checkFeatureGate`, `this.reportedEgressIpProbeFailureReasons.add`, `this.reportedEgressIpProbeFailureReasons.has`.

Assignment or increment targets: `this.lastEgressIpHash`.

SHA-256 of the source span: `52fa5c80fcb0f498fe3fd5275b67861cd56237d3248930064c402197523546fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
