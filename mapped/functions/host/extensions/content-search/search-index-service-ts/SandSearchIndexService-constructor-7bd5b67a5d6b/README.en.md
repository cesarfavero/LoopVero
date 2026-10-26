# `SandSearchIndexService.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542235-542245](../../../../../../../reference/runtime/host-main.cjs#L542235-L542245) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542235-542245](../../../../../../../reference/runtime/host-main.cjs#L542235-L542245) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:542235

Calls written directly in this body: `defaultWorkerEntryPath`, `isFts5Available`.

Assignment or increment targets: `this.agentsRootDir`, `this.createJobPort`, `this.createQueryPort`, `this.disposeDeadline`, `this.indexDbPath`, `this.isFtsEnabled`, `this.report`.

SHA-256 of the source span: `4d727b06657083d633ea8fab821539e06d457e002206e5a58624664a77445510`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
