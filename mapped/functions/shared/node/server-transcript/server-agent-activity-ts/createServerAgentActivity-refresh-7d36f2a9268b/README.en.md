# `createServerAgentActivity/refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711169-711174](../../../../../../../reference/runtime/host-main.cjs#L711169-L711174) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711169-711174](../../../../../../../reference/runtime/host-main.cjs#L711169-L711174) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:711169

Calls written directly in this body: `agents.keys`, `publish`, `shouldEmit`.

SHA-256 of the source span: `fb55f612c55c94da77e5ad626765334657f472590c3707359ed91500deabea93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
