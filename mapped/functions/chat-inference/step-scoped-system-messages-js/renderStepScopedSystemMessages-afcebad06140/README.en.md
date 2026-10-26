# `renderStepScopedSystemMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/step-scoped-system-messages.js` · [Module README](../../../../modules/chat-inference/step-scoped-system-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:285980-285982](../../../../../reference/runtime/sand-eval-runner.cjs#L285980-L285982) | `FunctionDeclaration` | no | `messages, { native }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285980-285982](../../../../../reference/runtime/sand-eval-runner.cjs#L285980-L285982) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:285980

Calls written directly in this body: `withStepScopedSystemMessagesAsReminders`.

SHA-256 of the source span: `fa11e3503dc3ff629f55698bacac20c46f4427bf8310857e6e2b0fe27fae76ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
