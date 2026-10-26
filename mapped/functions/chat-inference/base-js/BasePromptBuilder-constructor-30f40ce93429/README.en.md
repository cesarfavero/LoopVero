# `BasePromptBuilder.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:285986-285995](../../../../../reference/runtime/sand-eval-runner.cjs#L285986-L285995) | `method` | no | `initialMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285986-285995](../../../../../reference/runtime/sand-eval-runner.cjs#L285986-L285995) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:285986

Calls written directly in this body: `Array.isArray`.

Assignment or increment targets: `this.messages`.

SHA-256 of the source span: `36cf7ce705dfd090eb60b21d9aa8437975d5d8203adf4e0cb36c87514ade57d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
