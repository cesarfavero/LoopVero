# `createMcpToolsDiscovery/_inlineHttpServerNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691429-691438](../../../../../../../reference/runtime/host-main.cjs#L691429-L691438) | `FunctionDeclaration` | no | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691429-691438](../../../../../../../reference/runtime/host-main.cjs#L691429-L691438) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:691429

Calls written directly in this body: `Object.entries`, `names3.add`, `new Set`, `parseAccountMcpConfigJson`.

SHA-256 of the source span: `792bbd124f67911fa03b88d16ea4af0d5ac9d2b583412f21d139eadacdc43ae4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
