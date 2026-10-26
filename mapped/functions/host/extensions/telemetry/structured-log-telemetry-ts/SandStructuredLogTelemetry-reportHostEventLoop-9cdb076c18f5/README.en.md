# `SandStructuredLogTelemetry.reportHostEventLoop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473226-473229](../../../../../../../reference/runtime/host-main.cjs#L473226-L473229) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473226-473229](../../../../../../../reference/runtime/host-main.cjs#L473226-L473229) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473226

Calls written directly in this body: `eventLoopWindowTelemetry`, `this.enqueue`.

SHA-256 of the source span: `b13deb72be15bd8a85487ec30c8537b28231b70cefadcf260ec38d10abcc495f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
