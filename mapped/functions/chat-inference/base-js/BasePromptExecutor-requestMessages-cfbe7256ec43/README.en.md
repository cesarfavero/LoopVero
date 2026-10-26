# `BasePromptExecutor.requestMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:286036-286040](../../../../../reference/runtime/sand-eval-runner.cjs#L286036-L286040) | `method` | no | `{ nativeStepScopedSystemMessages = false } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:286036-286040](../../../../../reference/runtime/sand-eval-runner.cjs#L286036-L286040) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:286036

Calls written directly in this body: `.map`, `renderStepScopedSystemMessages`, `this.builder.getMessages`.

SHA-256 of the source span: `0c2f608a8d5b856ee47eb5ae57e97e3a2c6f7875d13a26776a4337e2200764b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
