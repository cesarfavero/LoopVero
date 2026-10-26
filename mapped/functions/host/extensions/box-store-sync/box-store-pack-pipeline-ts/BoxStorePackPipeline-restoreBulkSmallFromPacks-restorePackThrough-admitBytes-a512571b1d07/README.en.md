# `BoxStorePackPipeline.restoreBulkSmallFromPacks/restorePackThrough/admitBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-pack-pipeline.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-pack-pipeline-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:479267-479270](../../../../../../../reference/runtime/host-main.cjs#L479267-L479270) | `ArrowFunctionExpression` | yes | `memberBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:479267-479270](../../../../../../../reference/runtime/host-main.cjs#L479267-L479270) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:479267

Calls written directly in this body: `byteBudget.acquire`.

SHA-256 of the source span: `ce5c78876409f276165126ddcf37a1ce86d071f9659ce90173e373d9dce8dd8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
