# `isFirstPartyConnectorTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479236-479239](../../../../../../reference/runtime/sand-eval-runner.cjs#L479236-L479239) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479236-479239](../../../../../../reference/runtime/sand-eval-runner.cjs#L479236-L479239) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:479236

Calls written directly in this body: `FIRST_PARTY_GMAIL_MCP_TOOLS.has`, `FIRST_PARTY_GOOGLE_DRIVE_MCP_TOOLS.has`.

SHA-256 of the source span: `72605336a44ffe9ac7dcf2d60ce080eb1c4f1a3708f3fb291addf489356e6620`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
