# `extension3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:595976-595979](../../../../../../reference/runtime/sand-eval-runner.cjs#L595976-L595979) | `FunctionDeclaration` | no | `filename` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595976-595979](../../../../../../reference/runtime/sand-eval-runner.cjs#L595976-L595979) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:595976

Calls written directly in this body: `.toLowerCase`, `import_node_path42.posix.extname`.

SHA-256 of the source span: `d2838012a67bbe18316e16e4571bd40d16fe621aebc00d8a7404d27ef6441dd1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
