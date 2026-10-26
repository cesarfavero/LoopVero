# `sessionPreviewForSendMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/session-preview-fallbacks.ts` · [Module README](../../../../../modules/shared/agents/session-preview-fallbacks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721710-721817](../../../../../../reference/runtime/host-main.cjs#L721710-L721817) | `FunctionDeclaration` | no | `message, slackMentionNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721710-721817](../../../../../../reference/runtime/host-main.cjs#L721710-L721817) | 39 | 0 | 0 | 28 | 0 | 0 |

### host:721710

Calls written directly in this body: `classifyAttachment`, `isSessionPreviewLink`, `localToolPermissionPreviewTarget`, `message.request.secrets.map`, `message.title.trim`, `slackMarkupForDisplay`, `widgetPrompt`.

SHA-256 of the source span: `3d5cae0a1d6a451c49c2735d6243989b87c24030931c8d5844fac3542d5d5959`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
