# `HostTelemetryService.constructor/onFlushError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732013-732013](../../../../../../../reference/runtime/host-main.cjs#L732013-L732013) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732013-732013](../../../../../../../reference/runtime/host-main.cjs#L732013-L732013) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732013 uses an implicit arrow-function return.

### host:732013

Calls written directly in this body: `this.reportMetricsFlushError`.

SHA-256 of the source span: `0b4302552a38e0d3cf8b093f43ac728feb92e61988ef61dbd2fad6c7130f13f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
