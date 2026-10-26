# `createMcpToolsDiscovery/_fetchToolsWithinBoxBudget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691289-691333](../../../../../../../reference/runtime/host-main.cjs#L691289-L691333) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691289-691333](../../../../../../../reference/runtime/host-main.cjs#L691289-L691333) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:691289

Calls written directly in this body: `Math.min`, `_discoverBoxTools`, `_discoverHttpTools`, `_withBoxListing`, `boxListing.then`, `deferredBox.serverIdentifiers.map`, `deps.onBoxListingDeferred`, `new Map`, `settle2`, `settledWithin`, `sinceStart`, `statusFromBoxListStatus`.

SHA-256 of the source span: `dc40ffa6e19aa814fcbc184398a6fd63ffe74e5d9b9f890cc3258f897d851c16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
