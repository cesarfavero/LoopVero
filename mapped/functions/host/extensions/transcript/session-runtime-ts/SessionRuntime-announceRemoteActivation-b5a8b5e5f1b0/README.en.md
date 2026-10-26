# `SessionRuntime.announceRemoteActivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738015-738024](../../../../../../../reference/runtime/host-main.cjs#L738015-L738024) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738015-738024](../../../../../../../reference/runtime/host-main.cjs#L738015-L738024) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:738015

Calls written directly in this body: `Date.now`, `Promise.resolve`, `this.announceActivation`, `this.announcedAgentId`, `this.invalidateDeferredActivation`, `this.markSessionLeftBehind`, `this.tm.sessionStore.markAgentViewed`.

Assignment or increment targets: `this.pendingActivationAgentId`.

SHA-256 of the source span: `fed54cac008306d1f71adaa626c7390d2905086b3ce67fec3e6f0bfc81fa03da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
