# `withNote2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584652-584660](../../../../../../reference/runtime/sand-eval-runner.cjs#L584652-L584660) | `FunctionDeclaration` | no | `success2, note` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584652-584660](../../../../../../reference/runtime/sand-eval-runner.cjs#L584652-L584660) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584652

Calls written directly in this body: `annotated2.content.push`, `new McpResult`, `new McpTextContent`, `new McpToolResultContentItem`, `success2.clone`.

SHA-256 of the source span: `d30e2b469af0d342f3352da7b4f3cbfe7f07e8cabedb893a3f105e5efee6a1a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
