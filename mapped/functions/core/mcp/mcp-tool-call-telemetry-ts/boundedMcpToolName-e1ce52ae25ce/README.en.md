# `boundedMcpToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479240-479246](../../../../../../reference/runtime/sand-eval-runner.cjs#L479240-L479246) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479240-479246](../../../../../../reference/runtime/sand-eval-runner.cjs#L479240-L479246) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:479240

Calls written directly in this body: `.has`, `ALLOWLISTED_MCP_TOOLS.has`, `VENDOR_CONNECTOR_TOOLS.get`, `isFirstPartyConnectorTool`.

SHA-256 of the source span: `e9aaca63aa64212352998614266555a7c5979af98c8741c8f397f8848cad2364`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
