# `isNonceDedupedSendReplayable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-action-core.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709961-709964](../../../../../../../reference/runtime/host-main.cjs#L709961-L709964) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709961-709964](../../../../../../../reference/runtime/host-main.cjs#L709961-L709964) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:709961

Calls written directly in this body: `error64.metadata.has`.

SHA-256 of the source span: `d2b9c34253c79a5a0622b08b46ce6ebf156108379b5e782c9048d8e921fa8db7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
