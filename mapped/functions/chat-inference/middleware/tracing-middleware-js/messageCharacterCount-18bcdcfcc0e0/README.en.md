# `messageCharacterCount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/tracing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617781-617807](../../../../../../reference/runtime/host-main.cjs#L617781-L617807) | `FunctionDeclaration` | no | `message` |
| [evaluation:287152-287178](../../../../../../reference/runtime/sand-eval-runner.cjs#L287152-L287178) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617781-617807](../../../../../../reference/runtime/host-main.cjs#L617781-L617807) | 7 | 2 | 0 | 5 | 0 | 0 |
| [evaluation:287152-287178](../../../../../../reference/runtime/sand-eval-runner.cjs#L287152-L287178) | 7 | 2 | 0 | 5 | 0 | 0 |

### host:617781

Calls written directly in this body: `Array.isArray`, `JSON.stringify`, `joinedElementLength`.

Assignment or increment targets: `total`.

SHA-256 of the source span: `d0ddba8a8ba02021ab51af61c6d1dda1dfbf1fdeafbef3d542320dd0d8517910`.

### evaluation:287152

Calls written directly in this body: `Array.isArray`, `JSON.stringify`, `joinedElementLength`.

Assignment or increment targets: `total`.

SHA-256 of the source span: `d0ddba8a8ba02021ab51af61c6d1dda1dfbf1fdeafbef3d542320dd0d8517910`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
