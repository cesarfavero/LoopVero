# `serverConfigsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/connector-scope/connector-scope.ts` · [Module README](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525823-525832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525823-L525832) | `FunctionDeclaration` | no | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525823-525832](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525823-L525832) | 2 | 1 | 0 | 3 | 0 | 0 |

### evaluation:525823

Calls written directly in this body: `Object.entries`, `canonicalJson`, `isUnknownRecord2`, `mcpConfigSchema.safeParse`, `new Map`, `parseJsonOrUndefined2`, `servers.set`.

SHA-256 of the source span: `a846cf075c10efa0b6a148bc6ce6a01895dcc441e41fc39b9ff4b3e333c57461`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
