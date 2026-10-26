# `createMcpToolsDiscovery/_startToolsResolution`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691053-691100](../../../../../../../reference/runtime/host-main.cjs#L691053-L691100) | `FunctionDeclaration` | no | `requestedKey, carryStale, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691053-691100](../../../../../../../reference/runtime/host-main.cjs#L691053-L691100) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:691053

Calls written directly in this body: `Date.now`, `_currentDiscoveredForKey`, `_getToolsViaBackend`, `entry.promise.then`.

Assignment or increment targets: `toolsCacheEntry`.

SHA-256 of the source span: `4d3009841c72a85536a25f43dfbfcf119f0b653d74f3d797c176f7faa448e7c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
