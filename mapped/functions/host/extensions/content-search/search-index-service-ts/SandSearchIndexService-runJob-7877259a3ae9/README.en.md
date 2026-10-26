# `SandSearchIndexService.runJob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542501-542509](../../../../../../../reference/runtime/host-main.cjs#L542501-L542509) | `method` | yes | `job` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542501-542509](../../../../../../../reference/runtime/host-main.cjs#L542501-L542509) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:542501

Calls written directly in this body: `Math.max`, `this.dispatchJob`.

Assignment or increment targets: `this.pendingReindexCount`.

SHA-256 of the source span: `9db37d5557763dc3184ac1a1a61ace766bd34f7eab6a93543a1a2f81e94dec8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
