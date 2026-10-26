# `callMcpAppTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-app-runtime.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701473-701500](../../../../../../../reference/runtime/host-main.cjs#L701473-L701500) | `FunctionDeclaration` | yes | `mcp, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701473-701500](../../../../../../../reference/runtime/host-main.cjs#L701473-L701500) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:701473

Calls written directly in this body: `appCallableTool`, `appToolCallResultOf`, `createContext`, `executor.execute`, `mcp.createExecutor`, `mcp.findTool`, `new McpArgs`, `parseToolArguments`.

SHA-256 of the source span: `f6ece64b5aaaaa908c95da453797e6cff48bf6535c211d9ac488a1d86fc110c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
