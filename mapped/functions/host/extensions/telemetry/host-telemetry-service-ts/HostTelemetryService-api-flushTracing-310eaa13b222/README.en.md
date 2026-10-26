# `HostTelemetryService.api/flushTracing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732105-732105](../../../../../../../reference/runtime/host-main.cjs#L732105-L732105) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732105-732105](../../../../../../../reference/runtime/host-main.cjs#L732105-L732105) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732105 uses an implicit arrow-function return.

### host:732105

Calls written directly in this body: `this.tracing.flush`.

SHA-256 of the source span: `66a161f30fde825db83098405e411d12d1c7c101e671ea4aa29764326a2cd28e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
