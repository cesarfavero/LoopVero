# `SandStructuredLogTelemetry.reportHostStartup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473218-473221](../../../../../../../reference/runtime/host-main.cjs#L473218-L473221) | `method` | no | `metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473218-473221](../../../../../../../reference/runtime/host-main.cjs#L473218-L473221) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473218

Calls written directly in this body: `getHostBuiltAtMs`, `hostStartupTelemetry`, `this.enqueue`.

SHA-256 of the source span: `1e8b925b03d8fd754483e11f233663cb8e1140afc49e6017270b3573fe58b0c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
