# `spliceBeforeLast`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/user-turn-reminders.js` · [Module README](../../../../modules/chat-inference/user-turn-reminders-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:285898-285902](../../../../../reference/runtime/sand-eval-runner.cjs#L285898-L285902) | `FunctionDeclaration` | no | `content, marker17, text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:285898-285902](../../../../../reference/runtime/sand-eval-runner.cjs#L285898-L285902) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:285898

Calls written directly in this body: `content.lastIndexOf`, `content.slice`.

SHA-256 of the source span: `8e3af0d7373f6c664eac9be006efeb2f73328d48aa36f3cebc374331682b3c01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
