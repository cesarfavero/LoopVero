# `createMcpToolsDiscovery/_getToolsViaBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691255-691257](../../../../../../../reference/runtime/host-main.cjs#L691255-L691257) | `FunctionDeclaration` | no | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691255-691257](../../../../../../../reference/runtime/host-main.cjs#L691255-L691257) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:691255

Calls written directly in this body: `TOOLS_DISCOVERY_DEADLINE.run`.

SHA-256 of the source span: `2041681435fe5c3bde36892930360fbcf0e84a7792ca2a46a60e341664c03a1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
