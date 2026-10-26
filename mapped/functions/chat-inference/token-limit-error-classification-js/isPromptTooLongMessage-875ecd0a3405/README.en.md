# `isPromptTooLongMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294552-294554](../../../../../reference/runtime/sand-eval-runner.cjs#L294552-L294554) | `FunctionDeclaration` | no | `lowerMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294552-294554](../../../../../reference/runtime/sand-eval-runner.cjs#L294552-L294554) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294552

Calls written directly in this body: `lowerMessage.includes`.

SHA-256 of the source span: `864c015f46c9104ce32b882d833d5629f029d2dff97ee68c08d7729c6263ff9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
