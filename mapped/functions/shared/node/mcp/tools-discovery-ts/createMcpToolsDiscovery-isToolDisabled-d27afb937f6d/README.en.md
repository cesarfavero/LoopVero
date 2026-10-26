# `createMcpToolsDiscovery/_isToolDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691125-691140](../../../../../../../reference/runtime/host-main.cjs#L691125-L691140) | `FunctionDeclaration` | no | `{     providerIdentifier,     toolName   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691125-691140](../../../../../../../reference/runtime/host-main.cjs#L691125-L691140) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:691125

Calls written directly in this body: `.getMcpDisabledToolsByServerId`, `.getToolPermissions`, `_displayRowForIdentifier`, `_rowServerHost`, `core2.settingsStore`, `disabled.includes`, `mcpToolPermissionScope`, `routedToolCarriedPermission`.

SHA-256 of the source span: `5b171b6ca2ba1e824c230048842c5b6ecf3f2cf628c9b867bb33a50276131fa4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
