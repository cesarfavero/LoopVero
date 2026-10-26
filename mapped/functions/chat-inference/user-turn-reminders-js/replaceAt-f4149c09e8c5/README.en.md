# `replaceAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/user-turn-reminders.js` · [Module README](../../../../modules/chat-inference/user-turn-reminders-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:285895-285897](../../../../../reference/runtime/sand-eval-runner.cjs#L285895-L285897) | `FunctionDeclaration` | no | `items, index, item` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285895-285897](../../../../../reference/runtime/sand-eval-runner.cjs#L285895-L285897) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:285895

Calls written directly in this body: `items.map`.

SHA-256 of the source span: `9627d77ae0be82095f2e196b61bcf0a12b03fc5f8d02b7af6de1c8a46fb8e1dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
