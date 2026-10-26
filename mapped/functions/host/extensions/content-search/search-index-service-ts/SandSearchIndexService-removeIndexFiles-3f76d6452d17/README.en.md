# `SandSearchIndexService.removeIndexFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/search-index-service.ts` · [Module README](../../../../../../modules/host/extensions/content-search/search-index-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542412-542416](../../../../../../../reference/runtime/host-main.cjs#L542412-L542416) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542412-542416](../../../../../../../reference/runtime/host-main.cjs#L542412-L542416) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:542412

Calls written directly in this body: `removeSandDataFileSync`.

SHA-256 of the source span: `fa0042810c3065c53d6f9d710188a42331ae7fa401674377f937ef031434c0e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
