# `RosterEmit.buildAgentSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-emit.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-emit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739042-739060](../../../../../../../reference/runtime/host-main.cjs#L739042-L739060) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739042-739060](../../../../../../../reference/runtime/host-main.cjs#L739042-L739060) | 4 | 0 | 2 | 2 | 0 | 1 |

### host:739042

Calls written directly in this body: `reportFallback`, `this.tm.runLifecycle.withRunStates`, `this.tm.sessionStore.summarizeAgentById`, `this.tm.sessionStore.summarizeSession`, `this.tm.sessions.getAnnouncedActiveAgentId`, `this.tm.sessions.liveSessions.get`.

Assignment or increment targets: `summary`.

SHA-256 of the source span: `ab6f34a87864960845968a1d580655f3d565eb1cbac18ddb65dc9abc36b257d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
