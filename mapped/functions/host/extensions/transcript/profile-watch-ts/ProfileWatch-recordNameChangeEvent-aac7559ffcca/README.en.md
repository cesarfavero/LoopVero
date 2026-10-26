# `ProfileWatch.recordNameChangeEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/profile-watch.ts` · [Module README](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738804-738816](../../../../../../../reference/runtime/host-main.cjs#L738804-L738816) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738804-738816](../../../../../../../reference/runtime/host-main.cjs#L738804-L738816) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738804

Calls written directly in this body: `profile.name.trim`, `this.lastKnownAgentNames.get`, `this.lastKnownAgentNames.set`, `this.tm.emitTimelineEvent`, `this.tm.sessionStore.getAgentProfileText`.

SHA-256 of the source span: `021997dcdc3ed095a513a0b7f62cdf4b64df13c6baa24e287d3b439ef501070d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
