# `HostTelemetryService.reportMessageSent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732158-732170](../../../../../../../reference/runtime/host-main.cjs#L732158-L732170) | `method` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732158-732170](../../../../../../../reference/runtime/host-main.cjs#L732158-L732170) | 3 | 0 | 0 | 0 | 0 | 0 |

### host:732158

Calls written directly in this body: `Array.isArray`, `report.prompt.trim`, `this.analytics.markActive`, `this.trackMessageSent`.

SHA-256 of the source span: `ce8312826d696e341ef30e1120b8c9b3d624106a48bf5d93d3418164d6f9316d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
