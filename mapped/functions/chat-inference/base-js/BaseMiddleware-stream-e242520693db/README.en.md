# `BaseMiddleware.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617365-617367](../../../../../reference/runtime/host-main.cjs#L617365-L617367) | `method` | no | `ctx, invocationId, tools, options2` |
| [evaluation:286067-286069](../../../../../reference/runtime/sand-eval-runner.cjs#L286067-L286069) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617365-617367](../../../../../reference/runtime/host-main.cjs#L617365-L617367) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286067-286069](../../../../../reference/runtime/sand-eval-runner.cjs#L286067-L286069) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617365

Calls written directly in this body: `this.innerExecutor.stream`.

SHA-256 of the source span: `d0909eb495ff78110e0dff301daa7857ec0b9633bbc7cb7796d50224f238cf3a`.

### evaluation:286067

Calls written directly in this body: `this.innerExecutor.stream`.

SHA-256 of the source span: `d0909eb495ff78110e0dff301daa7857ec0b9633bbc7cb7796d50224f238cf3a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
