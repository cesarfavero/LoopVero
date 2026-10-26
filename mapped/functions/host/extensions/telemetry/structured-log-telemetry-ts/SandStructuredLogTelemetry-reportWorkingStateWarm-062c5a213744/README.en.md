# `SandStructuredLogTelemetry.reportWorkingStateWarm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473055-473058](../../../../../../../reference/runtime/host-main.cjs#L473055-L473058) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473055-473058](../../../../../../../reference/runtime/host-main.cjs#L473055-L473058) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473055

Calls written directly in this body: `this.enqueue`, `workingStateWarmTelemetry`.

SHA-256 of the source span: `8672eb03a4be1076d7fe4943916e2a61cb6483adcac9eaddd65a2269def77ba3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
