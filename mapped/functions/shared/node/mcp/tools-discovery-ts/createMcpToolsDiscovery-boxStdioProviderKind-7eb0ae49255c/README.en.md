# `createMcpToolsDiscovery/_boxStdioProviderKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691458-691471](../../../../../../../reference/runtime/host-main.cjs#L691458-L691471) | `FunctionDeclaration` | yes | `providerIdentifier, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691458-691471](../../../../../../../reference/runtime/host-main.cjs#L691458-L691471) | 3 | 0 | 2 | 4 | 0 | 1 |

### host:691458

Calls written directly in this body: `core2.definitionSource.getPushedServerConfigs`, `core2.definitionSource.getStdioServerConfigs`, `reportMcpHostEdgeFailure`.

SHA-256 of the source span: `4f8a6914d34b7ae00056c15f61dcecbc960745c510d464f7b88faa50f702bc82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
