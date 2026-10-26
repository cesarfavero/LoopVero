# `applyCustomInstructionsToMcpResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690730-690753](../../../../../../../reference/runtime/host-main.cjs#L690730-L690753) | `FunctionDeclaration` | no | `result, serverName, rawInstructions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690730-690753](../../../../../../../reference/runtime/host-main.cjs#L690730-L690753) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:690730

Calls written directly in this body: `formatMcpCustomInstructionToolNote`, `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`, `rawInstructions.trim`.

SHA-256 of the source span: `89a43eae9fcd678a8b7809604433d16a0c4c84924cdee9c7e5c6dc572a492724`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
