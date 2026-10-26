# `memberMentionHandles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491279-491286](../../../../../../reference/runtime/host-main.cjs#L491279-L491286) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491279-491286](../../../../../../reference/runtime/host-main.cjs#L491279-L491286) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491279

Calls written directly in this body: `.toLowerCase`, `handles.add`, `lower.replace`, `lower.split`, `name18.trim`, `new Set`.

SHA-256 of the source span: `2b2ef8fd17e0f3e1837300cdf9a46d2eb18c582ed38490e1f416445d2c56b54d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
