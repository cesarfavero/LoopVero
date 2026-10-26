# `RunLifecycle.beginSessionRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/run-lifecycle.ts` · [Module README](../../../../../../modules/host/extensions/transcript/run-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739981-739989](../../../../../../../reference/runtime/host-main.cjs#L739981-L739989) | `method` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739981-739989](../../../../../../../reference/runtime/host-main.cjs#L739981-L739989) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:739981

Calls written directly in this body: `Date.now`, `this.inFlightRunCounts.get`, `this.inFlightRunCounts.set`, `this.runWindowStartedAt.set`, `this.tm.roster.emitAgentUpdate`, `this.tm.sessions.liveSessions.set`.

SHA-256 of the source span: `bc8f82d7be8e39a1623474d4180d8272c04921827274dbea16d8e462361c855d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
