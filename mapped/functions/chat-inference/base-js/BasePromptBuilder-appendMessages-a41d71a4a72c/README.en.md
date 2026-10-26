# `BasePromptBuilder.appendMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:285996-286000](../../../../../reference/runtime/sand-eval-runner.cjs#L285996-L286000) | `method` | no | `newMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285996-286000](../../../../../reference/runtime/sand-eval-runner.cjs#L285996-L286000) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:285996

Calls written directly in this body: `Array.isArray`, `this.messages.push`.

SHA-256 of the source span: `0ae79b51d8a791ed369570e66de62632882b423d73145394a2e160712fe39530`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
