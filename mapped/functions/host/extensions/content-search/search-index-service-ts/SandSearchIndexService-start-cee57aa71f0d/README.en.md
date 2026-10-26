# `SandSearchIndexService.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542246-542258](../../../../../../../reference/runtime/host-main.cjs#L542246-L542258) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542246-542258](../../../../../../../reference/runtime/host-main.cjs#L542246-L542258) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:542246

Calls written directly in this body: `this.enqueue`, `this.markUnavailable`, `this.openAndMigrate`, `this.safeReadReconcileDone`.

Assignment or increment targets: `this.db`, `this.isReconcileDone`.

SHA-256 of the source span: `996bae3bc71130f9f1f30bb1d5c18804a3ca093acac02d5cd1324e2c7c432b3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
