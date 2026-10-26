# `hostedGmailSearchSuccess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/gmail-search-coverage.ts` · [Module README](../../../../../modules/core/mcp/gmail-search-coverage-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:584626-584632](../../../../../../reference/runtime/sand-eval-runner.cjs#L584626-L584632) | `FunctionDeclaration` | no | `args, result, resolveServerHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:584626-584632](../../../../../../reference/runtime/sand-eval-runner.cjs#L584626-L584632) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:584626

Calls written directly in this body: `.toLowerCase`, `resolveServerHost`.

SHA-256 of the source span: `5110390b359156b994d674b707a96e9c743bb5253927db146c5ec0de746d1ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
