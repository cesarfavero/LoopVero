# `BaseMiddleware.getMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617359-617361](../../../../../reference/runtime/host-main.cjs#L617359-L617361) | `method` | no | `(none)` |
| [evaluation:286061-286063](../../../../../reference/runtime/sand-eval-runner.cjs#L286061-L286063) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617359-617361](../../../../../reference/runtime/host-main.cjs#L617359-L617361) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286061-286063](../../../../../reference/runtime/sand-eval-runner.cjs#L286061-L286063) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617359

Calls written directly in this body: `this.innerExecutor.getMessages`.

SHA-256 of the source span: `1eac1efb65840a31991cea9620324ee20095efdb8f8be23271738c77ac537935`.

### evaluation:286061

Calls written directly in this body: `this.innerExecutor.getMessages`.

SHA-256 of the source span: `1eac1efb65840a31991cea9620324ee20095efdb8f8be23271738c77ac537935`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
