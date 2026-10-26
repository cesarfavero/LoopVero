# `withAutomationRunAnalytics/reportTurnRetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730577-730577](../../../../../../../reference/runtime/host-main.cjs#L730577-L730577) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730577-730577](../../../../../../../reference/runtime/host-main.cjs#L730577-L730577) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730577 uses an implicit arrow-function return.

### host:730577

Calls written directly in this body: `telemetry.reportTurnRetry`.

SHA-256 of the source span: `552e15e1d70b4db2ae9f2c5503d2fb392762213be5588970986207a6f71c1c21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
