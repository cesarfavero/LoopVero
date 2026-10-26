# `normalizeMcpCustomInstructionsByServerId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-custom-instructions.ts` · [Module README](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687281-687288](../../../../../../reference/runtime/host-main.cjs#L687281-L687288) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687281-687288](../../../../../../reference/runtime/host-main.cjs#L687281-L687288) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:687281

Calls written directly in this body: `MCP_DISPLAY_SERVER_ID_KEY.test`, `Object.entries`, `clampMcpCustomInstruction`.

Assignment or increment targets: `normalized[computed]`.

SHA-256 of the source span: `1805548e76efb381930482e3e374242be0f25b82d84fb515d860ce18d9101c1b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
