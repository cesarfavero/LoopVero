# `refusalResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-attachment-guard.ts` · [Module README](../../../../../modules/core/mcp/gmail-attachment-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584336-584350](../../../../../../reference/runtime/sand-eval-runner.cjs#L584336-L584350) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584336-584350](../../../../../../reference/runtime/sand-eval-runner.cjs#L584336-L584350) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584336

Calls written directly in this body: `new McpResult`, `new McpSuccess`, `new McpTextContent`, `new McpToolResultContentItem`.

SHA-256 of the source span: `1eaa1a3f5a5dcc154b72c77643eaf9f79bb03639bc6456b9217872f3172a690e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
