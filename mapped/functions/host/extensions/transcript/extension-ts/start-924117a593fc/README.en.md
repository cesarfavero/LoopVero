# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/extension.ts` · [Module README](../../../../../../modules/host/extensions/transcript/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:783686-783767](../../../../../../../reference/runtime/host-main.cjs#L783686-L783767) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783686-783767](../../../../../../../reference/runtime/host-main.cjs#L783686-L783767) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783686

Calls written directly in this body: `Object.assign`, `context2.onStop`, `createDraftExecutionAdapter`, `getSandRootDir`, `manager.draftSends.sweepStrandedDraftSends`, `manager.setBrokeredCredentialAwaitPort`, `manager.voiceCalls.setOverheardGate`, `new FeedbackEntries`, `new PromptAcceptanceLedger`, `new TranscriptManager`, `realClock.now`, `restoreCredentialRequestExpiryTimersOnBoot`, `sweepExpiredVirtualCardsOnBoot`.

SHA-256 of the source span: `8167a40c6712991c7992cf3c0c25c0a038f3c9679f630716cf9004fbf0dbd7d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
