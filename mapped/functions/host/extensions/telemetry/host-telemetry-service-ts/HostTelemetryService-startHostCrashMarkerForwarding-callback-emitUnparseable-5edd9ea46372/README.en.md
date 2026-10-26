# `HostTelemetryService.startHostCrashMarkerForwarding/<callback>/emitUnparseable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732216-732218](../../../../../../../reference/runtime/host-main.cjs#L732216-L732218) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732216-732218](../../../../../../../reference/runtime/host-main.cjs#L732216-L732218) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:732216

Calls written directly in this body: `this.logs.reportHostLog`.

SHA-256 of the source span: `6cf6443ec1e94db7db529f71c01501fad81e578f79f2a610e72c818fa79f3e0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
