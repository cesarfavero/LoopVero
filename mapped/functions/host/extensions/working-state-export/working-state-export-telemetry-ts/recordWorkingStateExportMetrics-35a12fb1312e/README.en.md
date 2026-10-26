# `recordWorkingStateExportMetrics`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785795-785841](../../../../../../../reference/runtime/host-main.cjs#L785795-L785841) | `FunctionDeclaration` | no | `ctx, report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785795-785841](../../../../../../../reference/runtime/host-main.cjs#L785795-L785841) | 6 | 0 | 0 | 0 | 0 | 0 |

### host:785795

Calls written directly in this body: `exportAttempts.increment`, `exportClosureBlobs.histogram`, `exportClosureBytes.histogram`, `exportDuration.histogram`, `exportListingDuration.histogram`, `exportPossibleReupload.increment`, `exportUploadedBlobs.histogram`, `exportUploadedBytes.histogram`.

SHA-256 of the source span: `09f5e2222d18d9ddf329c848411ad088d99ec29d41c917f9042e23e05b0815d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
