# `_CsnapsCodebaseTelemetryAdapter.flushPendingUploads`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-adapter.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540678-540687](../../../../../../../reference/runtime/host-main.cjs#L540678-L540687) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540678-540687](../../../../../../../reference/runtime/host-main.cjs#L540678-L540687) | 2 | 0 | 2 | 2 | 0 | 0 |

### host:540678

Calls written directly in this body: `this.createUploadCredentials`, `this.csnaps.flushPendingUploads`.

SHA-256 of the source span: `04338c7835c3a02a5b4d7badce8b4330fe5071dbd8d7e972dc8f081ef3e6661d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
