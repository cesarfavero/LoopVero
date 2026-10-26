# `ImageResizingPromptExecutor.stream`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617690-617721](../../../../../../reference/runtime/host-main.cjs#L617690-L617721) | `method` | no | `ctx, invocationId, tools, options2` |
| [evaluation:287061-287092](../../../../../../reference/runtime/sand-eval-runner.cjs#L287061-L287092) | `method` | no | `ctx, invocationId, tools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617690-617721](../../../../../../reference/runtime/host-main.cjs#L617690-L617721) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287061-287092](../../../../../../reference/runtime/sand-eval-runner.cjs#L287061-L287092) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617690

Calls written directly in this body: `forward`, `processAndStream`, `this.innerExecutor.getMessages`.

SHA-256 of the source span: `e7a858692901ac7f0edec8b278b325453eb1e9b6d75c927d1b8061523a411e6e`.

### evaluation:287061

Calls written directly in this body: `forward`, `processAndStream`, `this.innerExecutor.getMessages`.

SHA-256 of the source span: `a3dfbaa0061535ad9878120bdf6c12aa7a392c7179779ef231f8e878368dde1a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
