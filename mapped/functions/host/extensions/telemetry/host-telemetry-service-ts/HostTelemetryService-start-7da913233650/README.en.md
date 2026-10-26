# `HostTelemetryService.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732036-732090](../../../../../../../reference/runtime/host-main.cjs#L732036-L732090) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732036-732090](../../../../../../../reference/runtime/host-main.cjs#L732036-L732090) | 3 | 0 | 1 | 0 | 0 | 0 |

### host:732036

Calls written directly in this body: `createEventLoopTelemetry`, `createPressureCpuProfiler`, `processOutput.installConsoleForwarding`, `subscribeToCredentialRenewalTelemetry`, `this.adoptPersistedHttpProxyName`, `this.analytics.activate`, `this.analytics.markActive`, `this.logs.setFlushTickListener`, `this.options.desktopHealthPolling.start`, `this.options.egressIpPolling.start`.

Assignment or increment targets: `this.boxLogShipper`, `this.desktopHealthPolling`, `this.egressIpPolling`, `this.eventLoop`, `this.pressureProfiler`, `this.restoreConsole`, `this.unsubscribeEvents`.

SHA-256 of the source span: `d9d5cc645130ab8549290c1b98fd9db6214a218c7d447bcb8e2743220a3bfcd4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
