# `createLocalAttachmentStore/store`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:595990-595997](../../../../../../reference/runtime/sand-eval-runner.cjs#L595990-L595997) | `ArrowFunctionExpression` | yes | `filename, data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595990-595997](../../../../../../reference/runtime/sand-eval-runner.cjs#L595990-L595997) | 1 | 0 | 2 | 1 | 1 | 0 |

### evaluation:595990

Calls written directly in this body: `attachmentByteLimitForName`, `extension3`, `import_node_path42.posix.join`, `new AttachmentTooLargeError`, `sha256Hex3`.

Explicit throw targets: `AttachmentTooLargeError`.

SHA-256 of the source span: `a8bd65e6deff861c07f5179c12b90b82f7cb6b57faad04e747b9ef2d02158e69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
