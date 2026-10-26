# `isLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584603-584606](../../../../../../reference/runtime/sand-eval-runner.cjs#L584603-L584606) | `FunctionDeclaration` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584603-584606](../../../../../../reference/runtime/sand-eval-runner.cjs#L584603-L584606) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584603

Calls written directly in this body: `.replace`, `FREE_TEXT.test`, `LOOKUP_OPERATOR.test`, `query2.replace`.

SHA-256 of the source span: `cf6fae744a067eb4fb2c91ac8d2e4ddb038a0cf4c538e6550a60b04754ecb865`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
