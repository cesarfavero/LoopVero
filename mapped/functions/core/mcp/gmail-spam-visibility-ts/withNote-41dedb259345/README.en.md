# `withNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-spam-visibility.ts` · [Module README](../../../../../modules/core/mcp/gmail-spam-visibility-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584209-584219](../../../../../../reference/runtime/sand-eval-runner.cjs#L584209-L584219) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584209-584219](../../../../../../reference/runtime/sand-eval-runner.cjs#L584209-L584219) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584209

Calls written directly in this body: `new McpResult`, `new McpTextContent`, `new McpToolResultContentItem`, `result.result.value.clone`, `result.result.value.content.some`, `success2.content.push`.

SHA-256 of the source span: `7a85ef1a84551c29ad9aff71f1519a19ff09e8d657c94ae1b5d8e87f0fb02a25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
