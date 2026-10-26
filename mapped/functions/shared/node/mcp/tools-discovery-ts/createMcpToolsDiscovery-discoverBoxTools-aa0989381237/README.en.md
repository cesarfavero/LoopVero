# `createMcpToolsDiscovery/_discoverBoxTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691386-691423](../../../../../../../reference/runtime/host-main.cjs#L691386-L691423) | `FunctionDeclaration` | yes | `stdioServerNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691386-691423](../../../../../../../reference/runtime/host-main.cjs#L691386-L691423) | 4 | 1 | 3 | 4 | 0 | 1 |

### host:691386

Calls written directly in this body: `_ensureBoxServersPushed`, `_noDiscoveredServers`, `new Map`, `reportBoxStdioErrorStatus`, `reportMcpHostEdgeFailure`, `statusFromBoxListStatus`, `statuses.set`, `tools.push`, `withMcpTurnStartDiscoveryWait`.

SHA-256 of the source span: `97c6f006cf42d3b20e0704cfe3f85807092aa8ac93c20d9e6a29d7a63df78ce8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
