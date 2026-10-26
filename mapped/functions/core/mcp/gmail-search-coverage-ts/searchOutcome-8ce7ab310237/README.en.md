# `searchOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584607-584617](../../../../../../reference/runtime/sand-eval-runner.cjs#L584607-L584617) | `FunctionDeclaration` | no | `tool, success2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584607-584617](../../../../../../reference/runtime/sand-eval-runner.cjs#L584607-L584617) | 4 | 1 | 0 | 3 | 0 | 0 |

### evaluation:584607

Calls written directly in this body: `parseJsonOrUndefined2`, `tool.page.safeParse`.

SHA-256 of the source span: `be1e1b8ea8589effafbc063b062050b5522b7fc0162170ba5d77496ec304f544`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
