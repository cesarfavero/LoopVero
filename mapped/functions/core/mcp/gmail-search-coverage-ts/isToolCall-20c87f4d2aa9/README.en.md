# `isToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584618-584621](../../../../../../reference/runtime/sand-eval-runner.cjs#L584618-L584621) | `FunctionDeclaration` | no | `args, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584618-584621](../../../../../../reference/runtime/sand-eval-runner.cjs#L584618-L584621) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:584618

Calls written directly in this body: `args.name.endsWith`.

SHA-256 of the source span: `69a1a14e07ebf22311cba30361de9d8267fdaa1327da14e46565941bc130670a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
