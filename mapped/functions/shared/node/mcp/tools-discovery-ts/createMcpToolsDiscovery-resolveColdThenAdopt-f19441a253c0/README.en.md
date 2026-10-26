# `createMcpToolsDiscovery/_resolveColdThenAdopt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690867-690879](../../../../../../../reference/runtime/host-main.cjs#L690867-L690879) | `FunctionDeclaration` | yes | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690867-690879](../../../../../../../reference/runtime/host-main.cjs#L690867-L690879) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:690867

Calls written directly in this body: `Date.now`, `Promise.resolve`, `_getToolsViaBackend`, `settledOrAsListed`.

Assignment or increment targets: `toolsCacheEntry`.

SHA-256 of the source span: `486034c84251a93a9ac0c15fd5bb039d5989526d13d3e2bff5468ee4a954e467`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
