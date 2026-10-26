# `GroupChatOrchestrator.run/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737418-737458](../../../../../../reference/runtime/host-main.cjs#L737418-L737458) | `ArrowFunctionExpression` | no | `member, force` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737418-737458](../../../../../../reference/runtime/host-main.cjs#L737418-L737458) | 4 | 0 | 0 | 0 | 0 | 0 |

### host:737418

Calls written directly in this body: `.then`, `buildGroupTurnPrompt`, `delivery.noteDispatched`, `delivery.unseen`, `force.hiddenPrompts.join`, `members2.filter`, `pending.add`, `this.deps.readHistory`, `this.deps.runMemberTurn`, `trigger2.caughtUp.add`, `working.set`.

Assignment or increment targets: `dispatches`.

SHA-256 of the source span: `e0c5364a1ec3ca9cca4bfcb06556a112be189940d8189168ae51c8b031ff404d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
