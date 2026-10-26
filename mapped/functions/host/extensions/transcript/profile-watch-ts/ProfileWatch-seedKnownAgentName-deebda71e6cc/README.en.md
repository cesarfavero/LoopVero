# `ProfileWatch.seedKnownAgentName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738817-738822](../../../../../../../reference/runtime/host-main.cjs#L738817-L738822) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738817-738822](../../../../../../../reference/runtime/host-main.cjs#L738817-L738822) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:738817

Calls written directly in this body: `profile.name.trim`, `this.lastKnownAgentNames.has`, `this.lastKnownAgentNames.set`, `this.tm.sessionStore.getAgentProfileText`.

SHA-256 of the source span: `dd4e3ff0edacb2b03170a4ad7d006b86aedcb5454fe6b6386b475e210b0d0a70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
