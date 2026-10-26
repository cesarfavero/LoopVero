# `HostTelemetryService.startHostCrashMarkerForwarding/<callback>/markForwarded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732220-732222](../../../../../../../reference/runtime/host-main.cjs#L732220-L732222) | `ArrowFunctionExpression` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732220-732222](../../../../../../../reference/runtime/host-main.cjs#L732220-L732222) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:732220

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.lastHandledHostCrashMarker`.

SHA-256 of the source span: `55ff57ccf1f7fc500a35b21ff400498870c170db5e4446bc4841825bef51d614`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
