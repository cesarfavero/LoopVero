# `isOutputTokenLimitErrorMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294612-294614](../../../../../reference/runtime/sand-eval-runner.cjs#L294612-L294614) | `FunctionDeclaration` | no | `errorMessage4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294612-294614](../../../../../reference/runtime/sand-eval-runner.cjs#L294612-L294614) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294612

Calls written directly in this body: `.includes`, `errorMessage4.toLowerCase`.

SHA-256 of the source span: `39c02cbc96e9244a4ab848dd09a5f6dae3874628ccf71e0319079d10dac2b90d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
