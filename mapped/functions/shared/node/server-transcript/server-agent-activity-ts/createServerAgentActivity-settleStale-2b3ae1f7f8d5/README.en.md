# `createServerAgentActivity/settleStale`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711054-711066](../../../../../../../reference/runtime/host-main.cjs#L711054-L711066) | `ArrowFunctionExpression` | no | `agentId, sessionId, session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711054-711066](../../../../../../../reference/runtime/host-main.cjs#L711054-L711066) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:711054

Calls written directly in this body: `.sessions.get`, `agents.get`, `publish`.

Assignment or increment targets: `session.live`, `session.staleTimer`, `session.workingTaskIds`.

SHA-256 of the source span: `859188e113e5d9edb0b2ed9737bc96a4159772a0da5fd4cdced2fb8f92eb651d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
