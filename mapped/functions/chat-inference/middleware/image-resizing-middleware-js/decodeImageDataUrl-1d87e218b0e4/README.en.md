# `decodeImageDataUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/image-resizing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617464-617466](../../../../../../reference/runtime/host-main.cjs#L617464-L617466) | `FunctionDeclaration` | no | `value` |
| [evaluation:286835-286837](../../../../../../reference/runtime/sand-eval-runner.cjs#L286835-L286837) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617464-617466](../../../../../../reference/runtime/host-main.cjs#L617464-L617466) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:286835-286837](../../../../../../reference/runtime/sand-eval-runner.cjs#L286835-L286837) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617464

Calls written directly in this body: `decodeImageDataUrlWithUrlParser`, `decodeStrictBase64ImageDataUrl`.

SHA-256 of the source span: `712003bd32ae982f2b836a9bb95bdbba13f818bebe26e1503439572e5da33ccb`.

### evaluation:286835

Calls written directly in this body: `decodeImageDataUrlWithUrlParser`, `decodeStrictBase64ImageDataUrl`.

SHA-256 of the source span: `712003bd32ae982f2b836a9bb95bdbba13f818bebe26e1503439572e5da33ccb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
