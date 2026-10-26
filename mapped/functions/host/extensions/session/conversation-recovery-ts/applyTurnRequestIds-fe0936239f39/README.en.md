# `applyTurnRequestIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719996-720004](../../../../../../../reference/runtime/host-main.cjs#L719996-L720004) | `FunctionDeclaration` | no | `state, requestIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719996-720004](../../../../../../../reference/runtime/host-main.cjs#L719996-L720004) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:719996

Calls written directly in this body: `requestIds.entries`.

Assignment or increment targets: `turn.value.requestId`.

SHA-256 of the source span: `d09942a6f6be998441c7ad31eb4bb5422d3f165da26a2e5615161cfc1e03dda4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
