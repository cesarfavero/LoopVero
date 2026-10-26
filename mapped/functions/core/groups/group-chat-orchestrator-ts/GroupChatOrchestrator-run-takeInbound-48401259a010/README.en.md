# `GroupChatOrchestrator.run/takeInbound`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737407-737417](../../../../../../reference/runtime/host-main.cjs#L737407-L737417) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737407-737417](../../../../../../reference/runtime/host-main.cjs#L737407-L737417) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:737407

Calls written directly in this body: `forcedTurns`, `mayStart`, `mergeForced`, `this.admitInbound`, `this.deps.isCurrent`, `this.deps.takeInbound`.

Assignment or increment targets: `forced`, `trigger2`.

SHA-256 of the source span: `fa716ef8bf41eb5253235dc0ab3f1034fcbdacd1a499dc77ac6373d5b508c9ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
