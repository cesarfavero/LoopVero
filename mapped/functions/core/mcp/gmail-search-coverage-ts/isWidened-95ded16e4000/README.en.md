# `isWidened`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584598-584602](../../../../../../reference/runtime/sand-eval-runner.cjs#L584598-L584602) | `FunctionDeclaration` | no | `tool, args, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584598-584602](../../../../../../reference/runtime/sand-eval-runner.cjs#L584598-L584602) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584598

Calls written directly in this body: `NARROWING_FILTER.test`, `hasListItems`, `searchesAnywhere`.

SHA-256 of the source span: `832884f340049999aa87c3bdea21c1bc562a7dcf05688cde4d2fa3eee4e1c7f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
