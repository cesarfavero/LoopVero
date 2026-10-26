# `readFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:595980-595987](../../../../../../reference/runtime/sand-eval-runner.cjs#L595980-L595987) | `FunctionDeclaration` | no | `sourcePath2, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595980-595987](../../../../../../reference/runtime/sand-eval-runner.cjs#L595980-L595987) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:595980

Calls written directly in this body: `new SandToolInputError`.

SHA-256 of the source span: `8b5a8f626fb6ecd0cbee8cf984ad91f7fcd7f7ce7e4530b0f175b7f6582e4638`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
