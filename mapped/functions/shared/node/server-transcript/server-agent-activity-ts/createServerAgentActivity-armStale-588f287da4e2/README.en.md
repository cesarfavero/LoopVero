# `createServerAgentActivity/armStale`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711067-711076](../../../../../../../reference/runtime/host-main.cjs#L711067-L711076) | `ArrowFunctionExpression` | no | `agentId, sessionId, session, staleInMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711067-711076](../../../../../../../reference/runtime/host-main.cjs#L711067-L711076) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:711067

Calls written directly in this body: `clock.schedule`, `session.staleTimer.dispose`, `settleStale`.

Assignment or increment targets: `session.staleTimer`.

SHA-256 of the source span: `4e8e6f08382cd4ba72e2542e181f7d0a80f33219550d31ad31b3a38c63b1d23a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
