# `GroupChatOrchestrator.run/settleNext`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat-orchestrator.ts` · [Module README](../../../../../modules/core/groups/group-chat-orchestrator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737459-737463](../../../../../../reference/runtime/host-main.cjs#L737459-L737463) | `ArrowFunctionExpression` | yes | `turn` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737459-737463](../../../../../../reference/runtime/host-main.cjs#L737459-L737463) | 1 | 0 | 1 | 0 | 0 | 0 |

### host:737459

Calls written directly in this body: `mergeForced`, `new Map`, `this.settle`, `working.delete`.

Assignment or increment targets: `forced`.

SHA-256 of the source span: `d4cf86ddcfde8668cd6e70a4748616fb7fb2bfdba48c8d5d6983b1fa0a5a1ecb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
