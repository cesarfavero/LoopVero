# `createMcpToolsDiscovery/_getServerStatuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690797-690803](../../../../../../../reference/runtime/host-main.cjs#L690797-L690803) | `FunctionDeclaration` | yes | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690797-690803](../../../../../../../reference/runtime/host-main.cjs#L690797-L690803) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:690797

Calls written directly in this body: `_getDiscovered`, `_withRowIdentityStatuses`, `core2.definitionSource.getUserServerConfigs`, `deps.needsGrantRowIdentity`.

SHA-256 of the source span: `24e2452f7631f29f89a430a4c527f8e45a58cfcd0fb2cfe1ea0185108c093298`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
