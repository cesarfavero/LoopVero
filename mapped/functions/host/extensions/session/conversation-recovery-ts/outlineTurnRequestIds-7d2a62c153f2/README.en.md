# `outlineTurnRequestIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719856-719863](../../../../../../../reference/runtime/host-main.cjs#L719856-L719863) | `FunctionDeclaration` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719856-719863](../../../../../../../reference/runtime/host-main.cjs#L719856-L719863) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:719856

Calls written directly in this body: `requestIds.push`.

SHA-256 of the source span: `f8a0228568d1d06eb2e4c5e9cfa73c39266aaa34cbf5f653cdb32b02bc7899a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
