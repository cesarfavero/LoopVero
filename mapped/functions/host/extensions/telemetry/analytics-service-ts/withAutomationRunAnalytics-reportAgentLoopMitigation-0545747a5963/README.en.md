# `withAutomationRunAnalytics/reportAgentLoopMitigation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730568-730568](../../../../../../../reference/runtime/host-main.cjs#L730568-L730568) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730568-730568](../../../../../../../reference/runtime/host-main.cjs#L730568-L730568) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730568 uses an implicit arrow-function return.

### host:730568

Calls written directly in this body: `telemetry.reportAgentLoopMitigation`.

SHA-256 of the source span: `267269f9824c4644a4488539400c5dc8fc2511bd1c80e399e075a4f2dcd8166d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
