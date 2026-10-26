# `createMcpManagementTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780187-780712](../../../../../../../reference/runtime/host-main.cjs#L780187-L780712) | `FunctionDeclaration` | no | `management, getRequestingAgentId, isAwaitingUserSelection, emitConnectorCard, mcpMetaToolNames = SAND_STATIC_MCP_META_TOOL_NAMES, options2` |
| [evaluation:580432-580957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580432-L580957) | `FunctionDeclaration` | no | `management, getRequestingAgentId, isAwaitingUserSelection, emitConnectorCard, mcpMetaToolNames = SAND_STATIC_MCP_META_TOOL_NAMES, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780187-780712](../../../../../../../reference/runtime/host-main.cjs#L780187-L780712) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580432-580957](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580432-L580957) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:780187

Calls written directly in this body: `advertisedCardTaskIdSchema`, `authenticateMcpServerDescription`, `buildServerIdentifierParameterSchemas`, `copy.addDescription`, `copy.getDescription`, `copy.searchDescription`, `defineCommunicateTool`, `guardMutation`, `mcpManagementScopeFor`, `new McpRepairsThisTurn`, `withGatedArgumentAlias`.

SHA-256 of the source span: `142ed32c1f62c9d9801fd109c59889988264404042cb5a37516ed374343ba581`.

### evaluation:580432

Calls written directly in this body: `advertisedCardTaskIdSchema`, `authenticateMcpServerDescription`, `buildServerIdentifierParameterSchemas`, `copy.addDescription`, `copy.getDescription`, `copy.searchDescription`, `defineCommunicateTool`, `guardMutation`, `mcpManagementScopeFor`, `new McpRepairsThisTurn`, `withGatedArgumentAlias`.

SHA-256 of the source span: `5f94f4b2a6c5fe0598062c473ae0350cd03b56a2d67868edf768de4f0e547e4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
