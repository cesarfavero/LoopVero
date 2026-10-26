# `entryRaisesUserActivitySignal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485278-485280](../../../../../../reference/runtime/host-main.cjs#L485278-L485280) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485278-485280](../../../../../../reference/runtime/host-main.cjs#L485278-L485280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485278

Calls written directly in this body: `isAgentPeerMessageEntry`, `isOffChatChannelEntry`.

SHA-256 of the source span: `8824dca7fb077c80fab4596bdbd64e2a5b3bd02da345ecfaa08bb22136fd3076`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
