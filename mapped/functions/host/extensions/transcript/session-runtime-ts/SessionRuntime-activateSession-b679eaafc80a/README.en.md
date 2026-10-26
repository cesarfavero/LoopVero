# `SessionRuntime.activateSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738034-738068](../../../../../../../reference/runtime/host-main.cjs#L738034-L738068) | `method` | yes | `agentId, current2, viewedAt, mirror2, deferred` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738034-738068](../../../../../../../reference/runtime/host-main.cjs#L738034-L738068) | 7 | 1 | 6 | 5 | 0 | 1 |

### host:738034

Calls written directly in this body: `__callDispose`, `__using`, `deferred.isSuperseded`, `nextSession.db.getTranscriptEntries`, `nextSession.db.getUnreadState`, `readActivationGap`, `this.forgetSettledOpen`, `this.isSessionStale`, `this.markSessionLeftBehind`, `this.mirrorActiveTranscript`, `this.openSessionOnce`, `this.pinSessionActivation`, `this.replaceSession`, `this.resolveLiveSession`, `this.setActiveTranscript`, `this.tm.sessionStore.markSessionViewed`, `this.tm.sessionStore.markSessionViewedNow`.

Assignment or increment targets: `nextSession`, `this.loaded`.

SHA-256 of the source span: `5a2649c300550186e29ac3303d3d553cc88ab2919de3e20c01a6cb88927c6b00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
