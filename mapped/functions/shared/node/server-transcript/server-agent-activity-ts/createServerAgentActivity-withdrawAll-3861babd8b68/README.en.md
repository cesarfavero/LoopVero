# `createServerAgentActivity/withdrawAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-activity.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:711123-711127](../../../../../../../reference/runtime/host-main.cjs#L711123-L711127) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:711123-711127](../../../../../../../reference/runtime/host-main.cjs#L711123-L711127) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:711123

Calls written directly in this body: `agents.keys`, `deps.emit`, `shouldEmit`.

SHA-256 of the source span: `4153732269c758bf94f77248eb5e4d3c9bbc1d983cc353c1feb68efe14e9c8db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
