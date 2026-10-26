# `SandBoxStoreServiceObjectStore.getRaw`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474846-474858](../../../../../../../reference/runtime/host-main.cjs#L474846-L474858) | `method` | yes | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474846-474858](../../../../../../../reference/runtime/host-main.cjs#L474846-L474858) | 3 | 0 | 2 | 3 | 0 | 1 |

### host:474846

Calls written directly in this body: `fetchAgentStoreObjectFromUrl`, `this.presignRead`, `this.takePrefetchedRead`.

SHA-256 of the source span: `76c4292c20f72e872151825ad4e23ab5bb628420fb9117847d3e5cbe4f4408f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
