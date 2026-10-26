# `includesAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/token-limit-error-classification.js` · [Module README](../../../../modules/chat-inference/token-limit-error-classification-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:294533-294535](../../../../../reference/runtime/sand-eval-runner.cjs#L294533-L294535) | `FunctionDeclaration` | no | `haystack, needles` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:294533-294535](../../../../../reference/runtime/sand-eval-runner.cjs#L294533-L294535) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:294533

Calls written directly in this body: `needles.every`.

SHA-256 of the source span: `24cacc700d51acde6d6adc32547261792fc019a2581e3948e42b18fba50fb178`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
