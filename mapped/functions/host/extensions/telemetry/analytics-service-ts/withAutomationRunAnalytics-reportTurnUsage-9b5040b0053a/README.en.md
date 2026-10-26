# `withAutomationRunAnalytics/reportTurnUsage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730606-730606](../../../../../../../reference/runtime/host-main.cjs#L730606-L730606) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730606-730606](../../../../../../../reference/runtime/host-main.cjs#L730606-L730606) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730606 uses an implicit arrow-function return.

### host:730606

Calls written directly in this body: `telemetry.reportTurnUsage`.

SHA-256 of the source span: `40458084e68f045c8fc74c6a7144c787fa22f9711f78893f394314367fe7f137`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
