# `hasSendMessageCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/send-message-reminder-middleware.ts` · [Module README](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483097-483104](../../../../../../reference/runtime/sand-eval-runner.cjs#L483097-L483104) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483097-483104](../../../../../../reference/runtime/sand-eval-runner.cjs#L483097-L483104) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:483097

Calls written directly in this body: `message.content.some`.

SHA-256 of the source span: `d28ef708e65a53487041c5798bb04dedc7cf8a06231b78a2d106d9467f9ef857`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
