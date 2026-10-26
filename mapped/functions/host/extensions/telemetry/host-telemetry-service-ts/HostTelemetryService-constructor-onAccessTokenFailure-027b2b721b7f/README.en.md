# `HostTelemetryService.constructor/onAccessTokenFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732003-732003](../../../../../../../reference/runtime/host-main.cjs#L732003-L732003) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732003-732003](../../../../../../../reference/runtime/host-main.cjs#L732003-L732003) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732003 uses an implicit arrow-function return.

### host:732003

Calls written directly in this body: `reportFallback`.

SHA-256 of the source span: `160cc7018843110034a9223f88a170d7e495868229a1158c0efc712694ec5cf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
