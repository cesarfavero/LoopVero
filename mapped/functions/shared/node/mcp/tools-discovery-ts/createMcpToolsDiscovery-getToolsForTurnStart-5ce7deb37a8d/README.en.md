# `createMcpToolsDiscovery/_getToolsForTurnStart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690880-690898](../../../../../../../reference/runtime/host-main.cjs#L690880-L690898) | `FunctionDeclaration` | yes | `ctx, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690880-690898](../../../../../../../reference/runtime/host-main.cjs#L690880-L690898) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:690880

Calls written directly in this body: `_currentDiscoveredForKey`, `_dropSettledCacheForEmptyServerSet`, `_filterDisabledTools`, `_getTools`, `_peekDiscoveryServerNames`, `_scheduleColdStartWarm`, `_startToolsResolution`, `_toolServerSetKey`, `_toolsEntryUsable`.

SHA-256 of the source span: `6ce1e8e893b6f5147d5b87b80c550491c840008b9750365173e76cc605462068`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
