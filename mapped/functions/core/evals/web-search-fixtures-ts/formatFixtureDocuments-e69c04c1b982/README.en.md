# `formatFixtureDocuments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/web-search-fixtures.ts` · [Module README](../../../../../modules/core/evals/web-search-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596893-596897](../../../../../../reference/runtime/sand-eval-runner.cjs#L596893-L596897) | `FunctionDeclaration` | no | `documents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596893-596897](../../../../../../reference/runtime/sand-eval-runner.cjs#L596893-L596897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596893

Calls written directly in this body: `.join`, `documents.map`.

SHA-256 of the source span: `4f1b5414db7a1281bc27cb3722922171be7df7d802df1cb7701867e834db9c1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
