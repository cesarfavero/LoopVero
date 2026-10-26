# `wasImagePartChecked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617488-617488](../../../../../../reference/runtime/host-main.cjs#L617488-L617488) | `ArrowFunctionExpression` | no | `{ checkedImageParts, part, payload }` |
| [evaluation:286859-286859](../../../../../../reference/runtime/sand-eval-runner.cjs#L286859-L286859) | `ArrowFunctionExpression` | no | `{ checkedImageParts, part, payload }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617488-617488](../../../../../../reference/runtime/host-main.cjs#L617488-L617488) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:617488 uses an implicit arrow-function return.
| [evaluation:286859-286859](../../../../../../reference/runtime/sand-eval-runner.cjs#L286859-L286859) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:286859 uses an implicit arrow-function return.

### host:617488

Calls written directly in this body: `checkedImageParts.get`, `checkedImageParts.has`.

SHA-256 of the source span: `adeabb209fd17055db4b2b713977029adac1798be5e7f66375a69b3f86140088`.

### evaluation:286859

Calls written directly in this body: `checkedImageParts.get`, `checkedImageParts.has`.

SHA-256 of the source span: `adeabb209fd17055db4b2b713977029adac1798be5e7f66375a69b3f86140088`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
