# `coverageNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584643-584651](../../../../../../reference/runtime/sand-eval-runner.cjs#L584643-L584651) | `FunctionDeclaration` | no | `tool, args, outcome, sweepMorePagesNote` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584643-584651](../../../../../../reference/runtime/sand-eval-runner.cjs#L584643-L584651) | 7 | 0 | 0 | 6 | 0 | 0 |

### evaluation:584643

Calls written directly in this body: `boolArg`, `isLookup`, `isWidened`, `stringArg3`, `sweepMorePagesNote`.

SHA-256 of the source span: `f3cdb35343deb1e125b29a893ef9665a5461d297acd06d74f5c6156a87434be7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
