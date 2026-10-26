# `getLastMessageFromTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-projection.ts` · [Module README](../../../../../../modules/host/extensions/session/session-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722438-722461](../../../../../../../reference/runtime/host-main.cjs#L722438-L722461) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722438-722461](../../../../../../../reference/runtime/host-main.cjs#L722438-L722461) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:722438

Calls written directly in this body: `capPreviewLine`, `getChatTranscriptEntries`, `getPushMessageContentFromTranscript`, `hostSessionPreview`, `isLocalizableSessionPreview`, `markdownToNotificationText`, `sessionPreviewForSendMessage`.

Assignment or increment targets: `i`, `previewSource`.

SHA-256 of the source span: `69808880efa66d858957f407db08ce2b91f41e6e0fbae9fd47a6acbcf7017064`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
