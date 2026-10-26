# `HostTelemetryService.start/reportBatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732080-732080](../../../../../../../reference/runtime/host-main.cjs#L732080-L732080) | `ArrowFunctionExpression` | no | `records2, onEntrySettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732080-732080](../../../../../../../reference/runtime/host-main.cjs#L732080-L732080) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732080 uses an implicit arrow-function return.

### host:732080

Calls written directly in this body: `this.logs.reportBoxLogBatch`.

SHA-256 of the source span: `53d0b0636afd5a414ad62da3e14928868481537f7f3591afe942ec01afea74e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
