# `GroupChatOrchestrator.mayWake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737526-737531](../../../../../../reference/runtime/host-main.cjs#L737526-L737531) | `method` | no | `memberId, trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737526-737531](../../../../../../reference/runtime/host-main.cjs#L737526-L737531) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:737526

Calls written directly in this body: `delivery.isDue`, `delivery.isOwed`, `trigger2.caughtUp.has`.

SHA-256 of the source span: `443855427bca20adf7c20da636b7dc486d6580c1e4fd0fced3cafaa824f71fe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
