# `withAutomationRunAnalytics/reportQueueAccepted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730586-730586](../../../../../../../reference/runtime/host-main.cjs#L730586-L730586) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730586-730586](../../../../../../../reference/runtime/host-main.cjs#L730586-L730586) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730586 uses an implicit arrow-function return.

### host:730586

Calls written directly in this body: `telemetry.reportQueueAccepted`.

SHA-256 of the source span: `bff87057ce676ee27e5c95962e4e1ebd74304e6a96753591c907a26f4461ddae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
