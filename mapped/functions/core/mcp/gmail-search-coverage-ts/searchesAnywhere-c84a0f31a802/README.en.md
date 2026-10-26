# `searchesAnywhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584595-584597](../../../../../../reference/runtime/sand-eval-runner.cjs#L584595-L584597) | `FunctionDeclaration` | no | `tool, args, query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584595-584597](../../../../../../reference/runtime/sand-eval-runner.cjs#L584595-L584597) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:584595

Calls written directly in this body: `ANYWHERE_SCOPE.test`, `includesTrash`.

SHA-256 of the source span: `7fb17471c6545060e4a947c6c4006ea36246a946250cce332a68569efffbabe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
