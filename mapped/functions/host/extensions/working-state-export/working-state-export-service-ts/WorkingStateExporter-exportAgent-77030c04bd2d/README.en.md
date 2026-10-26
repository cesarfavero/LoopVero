# `WorkingStateExporter.exportAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785457-785490](../../../../../../../reference/runtime/host-main.cjs#L785457-L785490) | `method` | yes | `agentId, limits = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785457-785490](../../../../../../../reference/runtime/host-main.cjs#L785457-L785490) | 6 | 0 | 1 | 1 | 0 | 2 |

### host:785457

Calls written directly in this body: `Math.max`, `errorLogTag`, `reportFields`, `this.deps.log`, `this.deps.now`, `this.deps.report`, `this.uploadClosure`, `workingStateExportErrorClass`.

Assignment or increment targets: `outcome`.

SHA-256 of the source span: `42b1dc51436a8b625caba724f7fbb70eae0481d0a55c987d125c5adcb18a63b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
