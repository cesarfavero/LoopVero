# `needsContinuationMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/continuation-injector-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/continuation-injector-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617383-617389](../../../../../../reference/runtime/host-main.cjs#L617383-L617389) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:286085-286091](../../../../../../reference/runtime/sand-eval-runner.cjs#L286085-L286091) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617383-617389](../../../../../../reference/runtime/host-main.cjs#L617383-L617389) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:286085-286091](../../../../../../reference/runtime/sand-eval-runner.cjs#L286085-L286091) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:617383

Calls written directly in this body: `isEmptyAssistantMessage`.

SHA-256 of the source span: `e938d652a36182d01290864246c8037ceaf46855f697c8c34895fadda29cf458`.

### evaluation:286085

Calls written directly in this body: `isEmptyAssistantMessage`.

SHA-256 of the source span: `28580c413682cf5940253289295d468c97ba9ac270a736b786a038322a8acce3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
