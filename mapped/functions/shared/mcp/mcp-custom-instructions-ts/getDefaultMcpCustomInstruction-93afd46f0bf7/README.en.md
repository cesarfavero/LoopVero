# `getDefaultMcpCustomInstruction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687255-687257](../../../../../../reference/runtime/host-main.cjs#L687255-L687257) | `FunctionDeclaration` | no | `serverName` |
| [evaluation:529141-529143](../../../../../../reference/runtime/sand-eval-runner.cjs#L529141-L529143) | `FunctionDeclaration` | no | `serverName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687255-687257](../../../../../../reference/runtime/host-main.cjs#L687255-L687257) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529141-529143](../../../../../../reference/runtime/sand-eval-runner.cjs#L529141-L529143) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687255

Calls written directly in this body: `.toLowerCase`, `DEFAULT_MCP_CONNECTOR_INSTRUCTIONS.get`, `serverName.trim`.

SHA-256 of the source span: `93b939cda71bc324423094b466d3eaf65192932ef7358e6ac83c68461f99b640`.

### evaluation:529141

Calls written directly in this body: `.toLowerCase`, `DEFAULT_MCP_CONNECTOR_INSTRUCTIONS.get`, `serverName.trim`.

SHA-256 of the source span: `93b939cda71bc324423094b466d3eaf65192932ef7358e6ac83c68461f99b640`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
