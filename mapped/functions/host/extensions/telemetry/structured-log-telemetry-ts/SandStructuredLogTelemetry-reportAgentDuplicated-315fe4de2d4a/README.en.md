# `SandStructuredLogTelemetry.reportAgentDuplicated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/structured-log-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:473573-473583](../../../../../../../reference/runtime/host-main.cjs#L473573-L473583) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473573-473583](../../../../../../../reference/runtime/host-main.cjs#L473573-L473583) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473573

Calls written directly in this body: `brandLiteralEnum`, `brandedId`, `logFields`, `this.enqueue`.

SHA-256 of the source span: `10b881cd543fb689002453b7b607348be132e10e704aea20420c5d1594ae61be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
