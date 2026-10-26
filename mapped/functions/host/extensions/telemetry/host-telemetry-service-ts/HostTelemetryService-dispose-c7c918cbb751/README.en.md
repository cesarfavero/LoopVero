# `HostTelemetryService.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732184-732209](../../../../../../../reference/runtime/host-main.cjs#L732184-L732209) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732184-732209](../../../../../../../reference/runtime/host-main.cjs#L732184-L732209) | 0 | 0 | 7 | 0 | 0 | 0 |

### host:732184

Calls written directly in this body: `boxLogShipper.checkpointOffsets`, `boxLogShipper.dispose`, `boxLogShipper.stopPolling`, `this.analytics.dispose`, `this.desktopHealthPolling.dispose`, `this.egressIpPolling.dispose`, `this.eventLoop.dispose`, `this.hostCrashMarkerForwarding.dispose`, `this.logs.dispose`, `this.logs.setFlushTickListener`, `this.metrics.dispose`, `this.pressureProfiler.dispose`, `this.restoreConsole`, `this.tracing.dispose`, `this.unsubscribeEvents`.

Assignment or increment targets: `this.boxLogShipper`, `this.desktopHealthPolling`, `this.egressIpPolling`, `this.eventLoop`, `this.hostCrashMarkerForwarding`, `this.pressureProfiler`, `this.restoreConsole`, `this.unsubscribeEvents`.

SHA-256 of the source span: `73e14b71b06e157c34507fbbc40b7184e36224700c0c097a20680285defecf69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
