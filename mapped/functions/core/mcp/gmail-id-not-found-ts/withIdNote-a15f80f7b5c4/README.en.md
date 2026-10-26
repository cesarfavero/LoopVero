# `withIdNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-id-not-found.ts` · [Module README](../../../../../modules/core/mcp/gmail-id-not-found-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584502-584519](../../../../../../reference/runtime/sand-eval-runner.cjs#L584502-L584519) | `FunctionDeclaration` | no | `result, note` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584502-584519](../../../../../../reference/runtime/sand-eval-runner.cjs#L584502-L584519) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584502

Calls written directly in this body: `new McpResult`, `new McpTextContent`, `new McpToolResultContentItem`, `outcome.value.clone`, `success2.content.push`.

Assignment or increment targets: `error63.error`.

SHA-256 of the source span: `0243360d7c04ea08a0593ba7901b8a2f63bc49b45f077feb63fdc0a599218fa8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
