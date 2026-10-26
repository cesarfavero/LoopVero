# `SandStructuredLogTelemetry.reportBoxLogBatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473780-473803](../../../../../../../reference/runtime/host-main.cjs#L473780-L473803) | `method` | no | `records2, onEntrySettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473780-473803](../../../../../../../reference/runtime/host-main.cjs#L473780-L473803) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:473780

Calls written directly in this body: `brandedOrInvalidId`, `eventLogFields`, `logText`, `record3.source.replaceAll`, `this.enqueue`, `this.enqueueBoxInfrastructureEvent`.

SHA-256 of the source span: `21fa6e45b2e154103995f3fccb0085eb17c770b38d8f498bf8d59460a1a1960e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
