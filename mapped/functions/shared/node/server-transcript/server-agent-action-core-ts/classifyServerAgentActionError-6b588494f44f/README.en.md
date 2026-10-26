# `classifyServerAgentActionError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-agent-action-core.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-agent-action-core-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:710160-710250](../../../../../../../reference/runtime/host-main.cjs#L710160-L710250) | `FunctionDeclaration` | no | `error64, method` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:710160-710250](../../../../../../../reference/runtime/host-main.cjs#L710160-L710250) | 20 | 0 | 0 | 14 | 0 | 0 |

### host:710160

Calls written directly in this body: `SEND_LENGTH_REFUSAL.test`, `String`, `describeConnectFailure`, `error64.metadata.get`, `secretSaveRefused`, `unreachable2`.

SHA-256 of the source span: `1774ce54aba7561e4e71d803009686dd0e27b2ceb1db449ecbbf75ff61553b54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
