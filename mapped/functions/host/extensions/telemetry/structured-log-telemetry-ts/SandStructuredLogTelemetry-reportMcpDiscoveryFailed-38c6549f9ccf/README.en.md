# `SandStructuredLogTelemetry.reportMcpDiscoveryFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473244-473254](../../../../../../../reference/runtime/host-main.cjs#L473244-L473254) | `method` | no | `failure3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473244-473254](../../../../../../../reference/runtime/host-main.cjs#L473244-L473254) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473244

Calls written directly in this body: `Math.round`, `brandedErrorTag`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `1ea8dbdc14d6922834da67f2be1b8a1980e3ef05b0f55cde46f51f9540cb73e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
