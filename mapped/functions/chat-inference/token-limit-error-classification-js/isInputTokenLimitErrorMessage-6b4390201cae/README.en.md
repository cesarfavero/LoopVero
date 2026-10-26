# `isInputTokenLimitErrorMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294607-294610](../../../../../reference/runtime/sand-eval-runner.cjs#L294607-L294610) | `FunctionDeclaration` | no | `errorMessage4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294607-294610](../../../../../reference/runtime/sand-eval-runner.cjs#L294607-L294610) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294607

Calls written directly in this body: `errorMessage4.toLowerCase`, `isObservedInputTokenLimitMessage`.

SHA-256 of the source span: `d3b27947459280fb819db5ce933250d512434399e4a9016137555a4fa5778047`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
