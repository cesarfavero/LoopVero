# `mcpToolCallTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479278-479283](../../../../../../reference/runtime/sand-eval-runner.cjs#L479278-L479283) | `FunctionDeclaration` | no | `mcp, providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479278-479283](../../../../../../reference/runtime/sand-eval-runner.cjs#L479278-L479283) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:479278

Calls written directly in this body: `boundedConnectorTag`, `mcp.resolveToolConnector`.

SHA-256 of the source span: `5bb2791b81ad32957b29e0ea2e35d3599cef73bda45f9b5bc5b035f9ec43779b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
