# `AgentMediaRootObservability.recordProbeResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-media-root-observability.ts` · [Module README](../../../../modules/host/agent-media-root-observability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723925-723949](../../../../../reference/runtime/host-main.cjs#L723925-L723949) | `method` | no | `report, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723925-723949](../../../../../reference/runtime/host-main.cjs#L723925-L723949) | 2 | 0 | 0 | 0 | 0 | 1 |

### host:723925

Calls written directly in this body: `mediaRootWriteProbe.increment`, `metricLabels`, `telemetryReport`, `this.options.report`, `this.options.reportInternalError`.

SHA-256 of the source span: `451f8df2739695fcbc92a131ca65e6b4f3c8fccfd86c95522e49d442660972b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
