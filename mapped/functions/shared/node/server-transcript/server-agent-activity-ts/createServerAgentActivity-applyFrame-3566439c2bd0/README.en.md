# `createServerAgentActivity/applyFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711099-711122](../../../../../../../reference/runtime/host-main.cjs#L711099-L711122) | `ArrowFunctionExpression` | no | `frame` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711099-711122](../../../../../../../reference/runtime/host-main.cjs#L711099-L711122) | 3 | 4 | 0 | 0 | 0 | 0 |

### host:711099

Calls written directly in this body: `applyClient`, `applyLive`, `clearStaleTimers`, `new Set`, `parseAgentId`, `publish`, `state.sessions.clear`, `touched.add`.

Assignment or increment targets: `state.client`.

SHA-256 of the source span: `fd8fe5bf36a3842fa4aac5c3803e94a3e9232d1ecf24ef44009d4c2ec91a02c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
