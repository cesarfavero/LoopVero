# `isEmptyAssistantMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/continuation-injector-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/continuation-injector-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617374-617382](../../../../../../reference/runtime/host-main.cjs#L617374-L617382) | `FunctionDeclaration` | no | `message` |
| [evaluation:286076-286084](../../../../../../reference/runtime/sand-eval-runner.cjs#L286076-L286084) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617374-617382](../../../../../../reference/runtime/host-main.cjs#L617374-L617382) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:286076-286084](../../../../../../reference/runtime/sand-eval-runner.cjs#L286076-L286084) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:617374

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `68a1711fc255b00eec66fda86fae1e278281d6c890d39444fe4735d45377e482`.

### evaluation:286076

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `68a1711fc255b00eec66fda86fae1e278281d6c890d39444fe4735d45377e482`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
