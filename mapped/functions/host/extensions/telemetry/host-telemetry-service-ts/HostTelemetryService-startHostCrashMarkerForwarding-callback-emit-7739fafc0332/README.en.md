# `HostTelemetryService.startHostCrashMarkerForwarding/<callback>/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732215-732215](../../../../../../../reference/runtime/host-main.cjs#L732215-L732215) | `ArrowFunctionExpression` | no | `marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732215-732215](../../../../../../../reference/runtime/host-main.cjs#L732215-L732215) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732215 uses an implicit arrow-function return.

### host:732215

Calls written directly in this body: `this.logs.reportHostProcessExitConfirmed`.

SHA-256 of the source span: `1956e3221cf1ddde7104c8e7eb607f0137b276af3b9d5e2b089410d87e3f16fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
