# `GroupChatOrchestrator.admitInbound`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737532-737535](../../../../../../reference/runtime/host-main.cjs#L737532-L737535) | `method` | no | `members2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737532-737535](../../../../../../reference/runtime/host-main.cjs#L737532-L737535) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:737532

Calls written directly in this body: `new Set`, `this.deps.delivery.admit`, `this.deps.readHistory`.

SHA-256 of the source span: `e1fffda2cb7f9c9557121e17fcf0cb6a02fab275493393d7906cc62105759b62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
