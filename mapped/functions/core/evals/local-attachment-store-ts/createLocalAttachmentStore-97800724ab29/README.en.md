# `createLocalAttachmentStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/local-attachment-store.ts` · [Module README](../../../../../modules/core/evals/local-attachment-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:595988-596016](../../../../../../reference/runtime/sand-eval-runner.cjs#L595988-L596016) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:595988-596016](../../../../../../reference/runtime/sand-eval-runner.cjs#L595988-L596016) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:595988

Calls written directly in this body: `getAgentAttachmentsDir`.

SHA-256 of the source span: `98ea40dc0f4a937a78f1706c4c84bc6b36d2df1b21d0f524dc15378407388e97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
