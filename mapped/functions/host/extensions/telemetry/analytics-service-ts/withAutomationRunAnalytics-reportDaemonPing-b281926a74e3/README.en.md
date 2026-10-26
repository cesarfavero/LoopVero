# `withAutomationRunAnalytics/reportDaemonPing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/analytics-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/analytics-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730570-730570](../../../../../../../reference/runtime/host-main.cjs#L730570-L730570) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730570-730570](../../../../../../../reference/runtime/host-main.cjs#L730570-L730570) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:730570 uses an implicit arrow-function return.

### host:730570

Calls written directly in this body: `telemetry.reportDaemonPing`.

SHA-256 of the source span: `284a9b6ccbbd68a17ee646f250423b662f200ca78b1ec4a90372a59f3de177cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
