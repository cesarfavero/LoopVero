# `withGmailSearchCoverageNote/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584664-584675](../../../../../../reference/runtime/sand-eval-runner.cjs#L584664-L584675) | `FunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584664-584675](../../../../../../reference/runtime/sand-eval-runner.cjs#L584664-L584675) | 5 | 0 | 1 | 4 | 0 | 0 |

### evaluation:584664

Calls written directly in this body: `coverageNote`, `executor.execute`, `gmailSearchTool`, `hostedGmailSearchSuccess`, `recordSearch`, `searchOutcome`, `withNote2`.

SHA-256 of the source span: `a486a05a0b761ca2d3f10e55a1f312fe8e25dd22e422e91257f6649fca240b34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
