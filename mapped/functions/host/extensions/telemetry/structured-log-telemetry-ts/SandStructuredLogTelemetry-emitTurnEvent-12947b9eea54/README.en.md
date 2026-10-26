# `SandStructuredLogTelemetry.emitTurnEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473811-473813](../../../../../../../reference/runtime/host-main.cjs#L473811-L473813) | `method` | no | `event, metadata2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473811-473813](../../../../../../../reference/runtime/host-main.cjs#L473811-L473813) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473811

Calls written directly in this body: `this.enqueue`.

SHA-256 of the source span: `cc98b15f42bdc9d60edaf8d4640b80dd912e02d18dd5b56ccf30b57b89159a2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
