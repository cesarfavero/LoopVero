# `SandTurnTelemetryImpl.setRequestId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473858-473862](../../../../../../../reference/runtime/host-main.cjs#L473858-L473862) | `method` | no | `requestId2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473858-473862](../../../../../../../reference/runtime/host-main.cjs#L473858-L473862) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:473858

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.requestId`.

SHA-256 of the source span: `f7884f5241573b8da9d6429da879bc7709d3f350018747f0d8fa95a1718ebbba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
