# `withAutomationRunAnalytics/reportAgentLoopDetected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730567-730567](../../../../../../../reference/runtime/host-main.cjs#L730567-L730567) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730567-730567](../../../../../../../reference/runtime/host-main.cjs#L730567-L730567) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730567 uses an implicit arrow-function return.

### host:730567

Calls written directly in this body: `telemetry.reportAgentLoopDetected`.

SHA-256 of the source span: `ec8905dd18f998e3565cf49ec87433a6d43ef2832549bed43cb0b69dcd66a757`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
