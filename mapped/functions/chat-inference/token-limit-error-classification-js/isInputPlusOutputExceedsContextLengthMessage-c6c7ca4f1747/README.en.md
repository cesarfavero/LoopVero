# `isInputPlusOutputExceedsContextLengthMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294558-294566](../../../../../reference/runtime/sand-eval-runner.cjs#L294558-L294566) | `FunctionDeclaration` | no | `lowerMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294558-294566](../../../../../reference/runtime/sand-eval-runner.cjs#L294558-L294566) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294558

Calls written directly in this body: `includesAll`.

SHA-256 of the source span: `02b749e01beee40405c406a6616ca25876e6b07f69538f5d143bde4f2aba1c6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
