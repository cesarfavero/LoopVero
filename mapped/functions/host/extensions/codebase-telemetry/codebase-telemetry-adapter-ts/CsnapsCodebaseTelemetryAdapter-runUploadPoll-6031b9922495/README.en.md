# `_CsnapsCodebaseTelemetryAdapter.runUploadPoll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540731-540733](../../../../../../../reference/runtime/host-main.cjs#L540731-L540733) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540731-540733](../../../../../../../reference/runtime/host-main.cjs#L540731-L540733) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:540731

Calls written directly in this body: `Promise.all`, `this.refreshState`, `this.triggerUpload`.

SHA-256 of the source span: `b0301d1f52feff466dfae437894a7c5c10f376e726cca2e09a06c793e0d8fc5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
