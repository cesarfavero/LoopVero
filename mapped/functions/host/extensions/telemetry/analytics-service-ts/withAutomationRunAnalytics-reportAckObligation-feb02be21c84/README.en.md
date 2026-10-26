# `withAutomationRunAnalytics/reportAckObligation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730590-730604](../../../../../../../reference/runtime/host-main.cjs#L730590-L730604) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730590-730604](../../../../../../../reference/runtime/host-main.cjs#L730590-L730604) | 7 | 0 | 0 | 0 | 0 | 0 |

### host:730590

Calls written directly in this body: `analytics.trackEvent`, `brandedErrorClass`, `brandedId`, `telemetry.reportAckObligation`.

SHA-256 of the source span: `3586b6e43b69a3703a8fb71350a8f49f238d85dbbb8c282d43ed3b1cb207cf91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
