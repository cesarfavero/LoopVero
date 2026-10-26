# `mcpServerRestMcpProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-tool-read-access.ts` · [Module README](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686989-686992](../../../../../../reference/runtime/host-main.cjs#L686989-L686992) | `FunctionDeclaration` | no | `serverHost` |
| [evaluation:579124-579127](../../../../../../reference/runtime/sand-eval-runner.cjs#L579124-L579127) | `FunctionDeclaration` | no | `serverHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686989-686992](../../../../../../reference/runtime/host-main.cjs#L686989-L686992) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579124-579127](../../../../../../reference/runtime/sand-eval-runner.cjs#L579124-L579127) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686989

Calls written directly in this body: `.split`, `serverHost.toLowerCase`.

SHA-256 of the source span: `a263c5676e548471d66a45556af29cf4a9ce9052e8c8d98369e6a47955dead19`.

### evaluation:579124

Calls written directly in this body: `.split`, `serverHost.toLowerCase`.

SHA-256 of the source span: `a263c5676e548471d66a45556af29cf4a9ce9052e8c8d98369e6a47955dead19`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
