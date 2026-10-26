# `classifyTokenLimitErrorFromMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294616-294624](../../../../../reference/runtime/sand-eval-runner.cjs#L294616-L294624) | `FunctionDeclaration` | no | `errorMessage4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294616-294624](../../../../../reference/runtime/sand-eval-runner.cjs#L294616-L294624) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:294616

Calls written directly in this body: `.includes`, `errorMessage4.toLowerCase`, `isInputTokenLimitErrorMessage`, `isOutputTokenLimitErrorMessage`, `new InputTokenLimitError`, `new OutputTokensLimitExceededError`.

SHA-256 of the source span: `f34d8596e304a421ceca95110b54dc581e70b00ae9e0e0591f8d79dc9290c6cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
