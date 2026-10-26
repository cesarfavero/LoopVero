# `gmailSearchTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584622-584625](../../../../../../reference/runtime/sand-eval-runner.cjs#L584622-L584625) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584622-584625](../../../../../../reference/runtime/sand-eval-runner.cjs#L584622-L584625) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584622

Calls written directly in this body: `isSearchThreads`, `isToolCall`.

SHA-256 of the source span: `a9fd1b44183c13d6dcf39f409c251a91a0b72f057647627d737c225f5743747e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
