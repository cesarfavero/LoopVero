# `SandSearchIndexService.enqueue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542490-542500](../../../../../../../reference/runtime/host-main.cjs#L542490-L542500) | `method` | no | `job` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542490-542500](../../../../../../../reference/runtime/host-main.cjs#L542490-L542500) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:542490

Calls written directly in this body: `.catch`, `Promise.resolve`, `settled.then`, `this.jobTail.then`.

Assignment or increment targets: `this.jobTail`.

SHA-256 of the source span: `f96a73a43413695efd58a4a267a0934cecd7024caa5c28775a609e0fb8820553`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
