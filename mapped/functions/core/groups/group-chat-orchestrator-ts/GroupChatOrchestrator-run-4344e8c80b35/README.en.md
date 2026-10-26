# `GroupChatOrchestrator.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737389-737525](../../../../../../reference/runtime/host-main.cjs#L737389-L737525) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737389-737525](../../../../../../reference/runtime/host-main.cjs#L737389-L737525) | 13 | 4 | 7 | 3 | 1 | 2 |

### host:737389

Calls written directly in this body: `Promise.allSettled`, `Promise.race`, `delivery.admit`, `forced.delete`, `forced.get`, `forcedTurns`, `heldTurns`, `mayStart`, `members2.filter`, `members2.flatMap`, `mergeForced`, `new Map`, `new Promise`, `new Set`, `settleNext`, `settled.shift`, `start`, `takeInbound`, `this.deps.isCurrent`, `this.deps.readHistory`, `this.deps.resolveMembers`, `this.deps.waitForInbound`.

Assignment or increment targets: `failure3`, `trigger2.waves`, `turn`, `woken`.

Explicit throw targets: `turnFailure.error`.

SHA-256 of the source span: `6121d57710b0a4e8db36d545906c59aa6813f0cdbd911f51c66e252e85355583`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
