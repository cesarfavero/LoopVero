# `HostTelemetryService.setHostBundleIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732150-732157](../../../../../../../reference/runtime/host-main.cjs#L732150-L732157) | `method` | yes | `identity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732150-732157](../../../../../../../reference/runtime/host-main.cjs#L732150-L732157) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:732150

Calls written directly in this body: `this.boxLogShipper.start`, `this.logs.setHostBundleIdentity`, `this.startHostCrashMarkerForwarding`.

SHA-256 of the source span: `e947cbd70973453907a543fc8c94728644aa7f1da63124bf7800bd5f4de1c311`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
