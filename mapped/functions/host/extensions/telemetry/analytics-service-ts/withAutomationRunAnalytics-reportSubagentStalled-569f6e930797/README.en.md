# `withAutomationRunAnalytics/reportSubagentStalled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730580-730580](../../../../../../../reference/runtime/host-main.cjs#L730580-L730580) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730580-730580](../../../../../../../reference/runtime/host-main.cjs#L730580-L730580) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730580 uses an implicit arrow-function return.

### host:730580

Calls written directly in this body: `telemetry.reportSubagentStalled`.

SHA-256 of the source span: `47c8b1a1495580da2bb943f26e349546271136b9b1e3d5dba31222ea3106ac4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
