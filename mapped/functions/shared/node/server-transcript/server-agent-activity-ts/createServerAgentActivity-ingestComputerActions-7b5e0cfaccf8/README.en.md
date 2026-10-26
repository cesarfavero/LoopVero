# `createServerAgentActivity/ingestComputerActions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711138-711148](../../../../../../../reference/runtime/host-main.cjs#L711138-L711148) | `FunctionExpression` | no | `frame` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711138-711148](../../../../../../../reference/runtime/host-main.cjs#L711138-L711148) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:711138

Calls written directly in this body: `computerActionEventOf`, `deps.emitComputerAction`, `isSandSubagentId`, `parseAgentId`, `shouldEmit`.

SHA-256 of the source span: `d73a0e4591be044df3126fe4b54adf1645855fd97a78c47d36e352f91c40e61a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
