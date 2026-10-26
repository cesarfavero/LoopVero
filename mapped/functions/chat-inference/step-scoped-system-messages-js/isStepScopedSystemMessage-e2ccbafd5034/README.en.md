# `isStepScopedSystemMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/step-scoped-system-messages.js` · [Module README](../../../../modules/chat-inference/step-scoped-system-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617343-617345](../../../../../reference/runtime/host-main.cjs#L617343-L617345) | `FunctionDeclaration` | no | `message` |
| [evaluation:285954-285956](../../../../../reference/runtime/sand-eval-runner.cjs#L285954-L285956) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617343-617345](../../../../../reference/runtime/host-main.cjs#L617343-L617345) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285954-285956](../../../../../reference/runtime/sand-eval-runner.cjs#L285954-L285956) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617343

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4bf6aaf64145b78db4a4cfb8d7d38cf44a10bdcdc95caac60d560de93d298213`.

### evaluation:285954

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4bf6aaf64145b78db4a4cfb8d7d38cf44a10bdcdc95caac60d560de93d298213`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
