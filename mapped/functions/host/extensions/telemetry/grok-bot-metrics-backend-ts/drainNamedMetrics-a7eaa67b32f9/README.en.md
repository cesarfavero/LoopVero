# `drainNamedMetrics`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/grok-bot-metrics-backend.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/grok-bot-metrics-backend-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730200-730218](../../../../../../../reference/runtime/host-main.cjs#L730200-L730218) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730200-730218](../../../../../../../reference/runtime/host-main.cjs#L730200-L730218) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:730200

Calls written directly in this body: `metricsList.push`, `new ReportMetricsRequest`, `new ReportMetricsRequest_NamedMetric`.

Assignment or increment targets: `metricsList`.

SHA-256 of the source span: `90f0a7e7cb75f86ccd820f2c91531c0e4b7e95c9d735e0966ac789337d040edb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
