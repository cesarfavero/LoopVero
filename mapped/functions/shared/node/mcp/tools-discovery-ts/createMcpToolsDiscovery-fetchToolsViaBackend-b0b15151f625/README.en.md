# `createMcpToolsDiscovery/_fetchToolsViaBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691258-691288](../../../../../../../reference/runtime/host-main.cjs#L691258-L691288) | `FunctionDeclaration` | yes | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691258-691288](../../../../../../../reference/runtime/host-main.cjs#L691258-L691288) | 5 | 0 | 3 | 2 | 2 | 0 |

### host:691258

Calls written directly in this body: `Promise.all`, `Promise.allSettled`, `_discoverBoxTools`, `_discoverHttpTools`, `_fetchToolsWithinBoxBudget`, `_httpServerNamesForBackend`, `_stdioServerNamesForBox`, `_toolServerSetKey`, `_withBoxListing`, `clock.monotonicNow`, `deps.boxListingBudget`.

Explicit throw targets: `boxResult.reason`, `httpResult.reason`.

SHA-256 of the source span: `7958d7ab4ca72a56be3d7b3ab7ee909b95be890fc3bc7c42c67775827118e46c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
