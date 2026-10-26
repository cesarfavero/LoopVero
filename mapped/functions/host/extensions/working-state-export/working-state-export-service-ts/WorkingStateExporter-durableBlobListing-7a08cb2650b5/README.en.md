# `WorkingStateExporter.durableBlobListing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785577-785613](../../../../../../../reference/runtime/host-main.cjs#L785577-L785613) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785577-785613](../../../../../../../reference/runtime/host-main.cjs#L785577-L785613) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:785577

Calls written directly in this body: `.catch`, `.finally`, `.then`, `Promise.resolve`, `Symbol`, `new AbortController`, `new Set`.

Assignment or increment targets: `this.durableListing`.

SHA-256 of the source span: `1d8ac329118212e23f19d4fea783c4c1c6c1cb1b4e60e94f6ead716ca712d210`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
