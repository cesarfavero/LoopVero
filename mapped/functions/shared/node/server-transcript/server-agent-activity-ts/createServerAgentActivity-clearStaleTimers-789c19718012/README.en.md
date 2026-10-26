# `createServerAgentActivity/clearStaleTimers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711035-711040](../../../../../../../reference/runtime/host-main.cjs#L711035-L711040) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711035-711040](../../../../../../../reference/runtime/host-main.cjs#L711035-L711040) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:711035

Calls written directly in this body: `session.staleTimer.dispose`, `state.sessions.values`.

Assignment or increment targets: `session.staleTimer`.

SHA-256 of the source span: `3e4557b01e9fba0b70151bb8e739a7c3a6888131d2c8e6c661daf59bd6a6a58e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
