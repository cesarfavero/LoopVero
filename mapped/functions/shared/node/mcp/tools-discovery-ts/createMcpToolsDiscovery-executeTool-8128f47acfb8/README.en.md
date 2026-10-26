# `createMcpToolsDiscovery/_executeTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691141-691167](../../../../../../../reference/runtime/host-main.cjs#L691141-L691167) | `FunctionDeclaration` | yes | `ctx, args, auditIdentity, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691141-691167](../../../../../../../reference/runtime/host-main.cjs#L691141-L691167) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:691141

Calls written directly in this body: `.getRawMcpCustomInstruction`, `.getRawMcpCustomInstructionByServerId`, `_displayRowForIdentifier`, `_executeToolRaw`, `_isToolDisabled`, `applyCustomInstructionsToMcpResult`, `coerceMcpArgsToToolSchema`, `core2.settingsStore`, `new McpError`, `new McpResult`, `recordMcpExecRefusedBeforeDispatch`, `resolveMcpCustomInstruction`.

SHA-256 of the source span: `b48031fac54d0749dc1525f75f02ac2562294bdbda836f05e8c6ed88219865be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
