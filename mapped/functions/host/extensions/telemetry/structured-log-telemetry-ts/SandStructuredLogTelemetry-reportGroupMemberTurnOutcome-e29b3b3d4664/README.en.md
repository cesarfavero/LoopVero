# `SandStructuredLogTelemetry.reportGroupMemberTurnOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473498-473510](../../../../../../../reference/runtime/host-main.cjs#L473498-L473510) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473498-473510](../../../../../../../reference/runtime/host-main.cjs#L473498-L473510) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:473498

Calls written directly in this body: `boundedAgentId`, `brandedOrInvalidId`, `logFields`, `sandErrorTags`, `this.enqueue`.

SHA-256 of the source span: `4abb51d7d0ee3ae3536e0dffaff4c2b10b3838acc39b00b29a93077a820043bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
