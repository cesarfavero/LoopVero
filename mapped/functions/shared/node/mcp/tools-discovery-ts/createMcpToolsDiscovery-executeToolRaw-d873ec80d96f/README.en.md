# `createMcpToolsDiscovery/_executeToolRaw`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691198-691254](../../../../../../../reference/runtime/host-main.cjs#L691198-L691254) | `FunctionDeclaration` | yes | `ctx, args, auditIdentity, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691198-691254](../../../../../../../reference/runtime/host-main.cjs#L691198-L691254) | 5 | 0 | 6 | 5 | 0 | 1 |

### host:691198

Calls written directly in this body: `_boxStdioProviderKind`, `_displayRowForIdentifier`, `_ensureBoxServersPushed`, `_isHttpProvider`, `_reportFirstCall`, `boxMcpExec.executeTool`, `core2.backendMcpExec.executeTool`, `core2.definitionSource.getUserServerConfigs`, `deps.needsGrantRowIdentity`, `errorMessage`, `new McpError`, `new McpResult`, `recordMcpExecRefusedBeforeDispatch`, `toJsonArgs`.

SHA-256 of the source span: `466a617cfdf7d69bf82987d17e79bd3f8b203fa717b51ca948966df8436b8d8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
