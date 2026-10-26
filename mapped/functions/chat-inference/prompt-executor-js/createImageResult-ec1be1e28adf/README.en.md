# `createImageResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/prompt-executor.js` · [Module README](../../../../modules/chat-inference/prompt-executor-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617997-618007](../../../../../reference/runtime/host-main.cjs#L617997-L618007) | `FunctionDeclaration` | no | `imageData, mimeType, textContent, isError = false` |
| [evaluation:287368-287378](../../../../../reference/runtime/sand-eval-runner.cjs#L287368-L287378) | `FunctionDeclaration` | no | `imageData, mimeType, textContent2, isError = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617997-618007](../../../../../reference/runtime/host-main.cjs#L617997-L618007) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:287368-287378](../../../../../reference/runtime/sand-eval-runner.cjs#L287368-L287378) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:617997

Calls written directly in this body: `content.push`.

SHA-256 of the source span: `3badb129fc94af7edd3e805227b8e10aaf6ffa0d5a7017f18651cf359a3eabe9`.

### evaluation:287368

Calls written directly in this body: `content.push`.

SHA-256 of the source span: `23375f92036cee882024df4b08d4840d32c2f93d3e929cd42f27e5b2b18ae580`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
