# `recordSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584633-584642](../../../../../../reference/runtime/sand-eval-runner.cjs#L584633-L584642) | `FunctionDeclaration` | no | `ctx, args, outcome` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584633-584642](../../../../../../reference/runtime/sand-eval-runner.cjs#L584633-L584642) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:584633

Calls written directly in this body: `NARROWING_FILTER.test`, `String`, `pageSizeBucket`, `searches.increment`, `searchesAnywhere`, `stringArg3`.

SHA-256 of the source span: `d67130123838d5f9cdde8ed8ed9e1937883a3c41b4bb18bb40582893520418cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
