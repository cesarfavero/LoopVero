# `schemeAndQueryOrderInsensitiveUrlKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/web-search-fixtures.ts` · [Module README](../../../../../modules/core/evals/web-search-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596920-596929](../../../../../../reference/runtime/sand-eval-runner.cjs#L596920-L596929) | `FunctionDeclaration` | no | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596920-596929](../../../../../../reference/runtime/sand-eval-runner.cjs#L596920-L596929) | 0 | 0 | 0 | 2 | 0 | 1 |

### evaluation:596920

Calls written directly in this body: `new URL`, `rawUrl.trim`, `url2.pathname.replace`, `url2.searchParams.sort`.

Assignment or increment targets: `url2`.

SHA-256 of the source span: `4f202d07a63a6fe8a1d8123cdb31af0e7713b087f918f62c846c1ed5d5d51e8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
