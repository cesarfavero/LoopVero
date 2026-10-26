# `HostTelemetryService.startHostCrashMarkerForwarding`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732210-732229](../../../../../../../reference/runtime/host-main.cjs#L732210-L732229) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732210-732229](../../../../../../../reference/runtime/host-main.cjs#L732210-L732229) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:732210

Calls written directly in this body: `this.options.hostCrashMarkerPolling.start`.

Assignment or increment targets: `this.hostCrashMarkerForwarding`.

SHA-256 of the source span: `383eb88cb3e69aaaa8b21ef7c929f80a8ae4d27011b56832806d3c7da2311807`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
