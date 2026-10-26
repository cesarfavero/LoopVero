# `SandStructuredLogTelemetry.reportJournalOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473551-473554](../../../../../../../reference/runtime/host-main.cjs#L473551-L473554) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473551-473554](../../../../../../../reference/runtime/host-main.cjs#L473551-L473554) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473551

Calls written directly in this body: `journalOutcomeTelemetry`, `this.enqueue`.

SHA-256 of the source span: `d6372f29e1aa67fd12b3ebea3e72a70652317023b2c19170e3873e20e05e7033`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
