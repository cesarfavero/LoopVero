# `indexFixtureDocumentsByUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/web-search-fixtures.ts` · [Module README](../../../../../modules/core/evals/web-search-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596930-596937](../../../../../../reference/runtime/sand-eval-runner.cjs#L596930-L596937) | `FunctionDeclaration` | no | `config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596930-596937](../../../../../../reference/runtime/sand-eval-runner.cjs#L596930-L596937) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:596930

Calls written directly in this body: `config2.rules.flatMap`, `documentsByUrl.has`, `documentsByUrl.set`, `new Map`, `schemeAndQueryOrderInsensitiveUrlKey`.

SHA-256 of the source span: `5c439be0c773528a8842a5ee37f6d7c3b41e04d8dc2f152c6266c9664b7efb26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
