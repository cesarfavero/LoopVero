# `createMcpToolsDiscovery/_toolServerSetKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690914-690917](../../../../../../../reference/runtime/host-main.cjs#L690914-L690917) | `FunctionDeclaration` | no | `serverNames, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690914-690917](../../../../../../../reference/runtime/host-main.cjs#L690914-L690917) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:690914

Calls written directly in this body: `.join`, `.sort`.

SHA-256 of the source span: `87f359198a13a6e2c5f4915e1f76db880454ec7e79406fe8f863b2e80acff32d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
