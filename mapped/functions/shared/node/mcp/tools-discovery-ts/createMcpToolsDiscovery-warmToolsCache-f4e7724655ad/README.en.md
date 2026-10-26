# `createMcpToolsDiscovery/_warmToolsCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691108-691124](../../../../../../../reference/runtime/host-main.cjs#L691108-L691124) | `FunctionDeclaration` | yes | `epoch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691108-691124](../../../../../../../reference/runtime/host-main.cjs#L691108-L691124) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:691108

Calls written directly in this body: `Promise.all`, `_dropSettledCacheForEmptyServerSet`, `_httpServerNamesForBackend`, `_startToolsResolution`, `_stdioServerNamesForBox`, `_toolServerSetKey`, `_toolsEntryUsable`.

SHA-256 of the source span: `01b12a097b336bd82db6c72055eb9eca85f25d8bba4cf85604e3b5c83b0d8187`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
