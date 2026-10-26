# `createLocalAttachmentStore/ingestAttachment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:595999-596007](../../../../../../reference/runtime/sand-eval-runner.cjs#L595999-L596007) | `ArrowFunctionExpression` | yes | `sourcePath2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595999-596007](../../../../../../reference/runtime/sand-eval-runner.cjs#L595999-L596007) | 0 | 0 | 2 | 1 | 1 | 1 |

### evaluation:595999

Calls written directly in this body: `readFailure`, `store`.

Assignment or increment targets: `data2`.

Explicit throw targets: `readFailure`.

SHA-256 of the source span: `f157f8b2428fd597d4188cd67bc7eb1463bb69f608a5f45e0c0c8fd4ae3a2680`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
