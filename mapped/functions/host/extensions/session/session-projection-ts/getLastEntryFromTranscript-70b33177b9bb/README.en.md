# `getLastEntryFromTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-projection.ts` · [Module README](../../../../../../modules/host/extensions/session/session-projection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722462-722501](../../../../../../../reference/runtime/host-main.cjs#L722462-L722501) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722462-722501](../../../../../../../reference/runtime/host-main.cjs#L722462-L722501) | 12 | 1 | 0 | 7 | 0 | 0 |

### host:722462

Calls written directly in this body: `boundedPreviewSource`, `buildAttachmentLastEntry`, `getMainTranscriptEntries`, `hostSessionPreview`, `isAgentPeerMessageEntry`, `isLocalizableSessionPreview`, `isSessionPreviewLink`, `peerMessageLastEntry`, `sessionPreviewForSendMessage`, `sessionPreviewForWidget`.

Assignment or increment targets: `i`.

SHA-256 of the source span: `7c2c5d32850664ccd018f8ce477a5bcf6b0226e8f9ee1a259cd2ce395bada90c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
