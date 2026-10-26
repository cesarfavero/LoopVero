# `GroupChatOrchestrator.settle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737536-737560](../../../../../../reference/runtime/host-main.cjs#L737536-L737560) | `method` | yes | `turn, members2, trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737536-737560](../../../../../../reference/runtime/host-main.cjs#L737536-L737560) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:737536

Calls written directly in this body: `.slice`, `Math.max`, `deliverablePosts`, `delivery.admit`, `delivery.noteShown`, `delivery.noteStopped`, `delivery.rearmAfterFailedTurn`, `this.deps.isCurrent`, `this.deps.postMemberMessages`, `this.deps.readHistory`.

Assignment or increment targets: `trigger2.posts`.

SHA-256 of the source span: `f1c0476123e696e14263a3d8f44863df2078309c3b8d61c7118019ad71cf8acd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
