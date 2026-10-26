# `SessionRuntime.switchAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738001-738014](../../../../../../../reference/runtime/host-main.cjs#L738001-L738014) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738001-738014](../../../../../../../reference/runtime/host-main.cjs#L738001-L738014) | 1 | 0 | 3 | 2 | 0 | 0 |

### host:738001

Calls written directly in this body: `Date.now`, `getTranscript`, `this.activateSession`, `this.announceActivation`, `this.announcedAgentId`, `this.invalidateDeferredActivation`, `this.reannounceAfterRedirect`, `this.tm.roster.emit`.

SHA-256 of the source span: `c902feee7750757dda1b36ee66e56f84f3618576e32e0ded2ee8a05b803054d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
