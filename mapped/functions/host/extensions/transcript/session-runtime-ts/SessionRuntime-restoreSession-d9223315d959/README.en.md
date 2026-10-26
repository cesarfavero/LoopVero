# `SessionRuntime.restoreSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/session-runtime.ts` · [Module README](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:738226-738250](../../../../../../../reference/runtime/host-main.cjs#L738226-L738250) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738226-738250](../../../../../../../reference/runtime/host-main.cjs#L738226-L738250) | 3 | 1 | 4 | 4 | 0 | 1 |

### host:738226

Calls written directly in this body: `agents.map`, `agents.some`, `errorLogTag`, `new Set`, `recordIds.includes`, `this.activateUnlessSuperseded`, `this.openSessionOnce`, `this.tm.hostLog`, `this.tm.sessionStore.listAgentRecordIds`, `this.tm.sessionStore.listAgents`, `this.tm.sessionStore.readActiveAgentId`.

SHA-256 of the source span: `f27f5fd3ed2b7162a3247294e81672fb6785001affc3132fd6de857cd9f055e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
