# `analyzeMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/middleware/tracing-middleware.js` · [Module README](../../../../../modules/chat-inference/middleware/tracing-middleware-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617808-617835](../../../../../../reference/runtime/host-main.cjs#L617808-L617835) | `FunctionDeclaration` | no | `messages2` |
| [evaluation:287179-287206](../../../../../../reference/runtime/sand-eval-runner.cjs#L287179-L287206) | `FunctionDeclaration` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617808-617835](../../../../../../reference/runtime/host-main.cjs#L617808-L617835) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:287179-287206](../../../../../../reference/runtime/sand-eval-runner.cjs#L287179-L287206) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:617808

Calls written directly in this body: `messageCharacterCount`.

Assignment or increment targets: `stats.assistantChars`, `stats.assistantCount`, `stats.toolChars`, `stats.toolCount`, `stats.userChars`, `stats.userCount`.

SHA-256 of the source span: `5c110f84124190220d31545259fe0717758c6897f37f3db8b54c917a6d49589b`.

### evaluation:287179

Calls written directly in this body: `messageCharacterCount`.

Assignment or increment targets: `stats.assistantChars`, `stats.assistantCount`, `stats.toolChars`, `stats.toolCount`, `stats.userChars`, `stats.userCount`.

SHA-256 of the source span: `bba14a346c7f68962d9d82f3583e1a94e695820e0a255d66efb3313f8e03a9c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
