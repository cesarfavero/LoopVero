# `_CsnapsCodebaseTelemetryAdapter.triggerUpload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540758-540773](../../../../../../../reference/runtime/host-main.cjs#L540758-L540773) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540758-540773](../../../../../../../reference/runtime/host-main.cjs#L540758-L540773) | 3 | 0 | 2 | 2 | 0 | 1 |

### host:540758

Calls written directly in this body: `this.createUploadCredentials`, `this.csnaps.triggerUpload`, `this.logger.warn`.

SHA-256 of the source span: `3d32100f822b054fff16af5cd7950bc8a051df890d235228cd95439900194545`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
