# `SessionRuntime.openAgentBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738104-738137](../../../../../../../reference/runtime/host-main.cjs#L738104-L738137) | `method` | yes | `agentId, readLive, readCold` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738104-738137](../../../../../../../reference/runtime/host-main.cjs#L738104-L738137) | 3 | 0 | 3 | 4 | 0 | 0 |

### host:738104

Calls written directly in this body: `Date.now`, `readCold`, `readLive`, `reply2.entries.at`, `reply3.entries.at`, `this.activateSession`, `this.announceActivation`, `this.announcedAgentId`, `this.emitActivationGap`, `this.invalidateDeferredActivation`, `this.markSessionLeftBehind`, `this.reannounceAfterRedirect`, `this.resolveLiveSession`, `this.scheduleWindowedActivation`, `this.tm.sessionStore.markAgentViewed`.

SHA-256 of the source span: `4ee21d06dcd745eb0dee5ef429b5a54bee71f3a198ec293ada8876aab26b9034`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
