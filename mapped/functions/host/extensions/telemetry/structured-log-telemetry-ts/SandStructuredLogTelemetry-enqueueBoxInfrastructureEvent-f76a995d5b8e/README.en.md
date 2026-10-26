# `SandStructuredLogTelemetry.enqueueBoxInfrastructureEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473820-473823](../../../../../../../reference/runtime/host-main.cjs#L473820-L473823) | `method` | no | `event, onSettled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473820-473823](../../../../../../../reference/runtime/host-main.cjs#L473820-L473823) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473820

Calls written directly in this body: `boxInfrastructureTelemetry`, `this.enqueue`.

SHA-256 of the source span: `28eb1d948bfcd30f7db3ca736e95514c593216fc5875aeaa4f90ab5f45cb08e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
