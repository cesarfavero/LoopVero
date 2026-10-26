# `isInputAndMaxTokensExceedContextLimitMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294583-294585](../../../../../reference/runtime/sand-eval-runner.cjs#L294583-L294585) | `FunctionDeclaration` | no | `lowerMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294583-294585](../../../../../reference/runtime/sand-eval-runner.cjs#L294583-L294585) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294583

Calls written directly in this body: `includesAll`.

SHA-256 of the source span: `d4df547f011af3da8b161192a62bf91d8fd49b3068cd588f4c1a1ac1e6763648`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
