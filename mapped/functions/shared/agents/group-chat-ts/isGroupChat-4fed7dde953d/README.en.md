# `isGroupChat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `shared/agents/group-chat.ts` · [Module README](../../../../../modules/shared/agents/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490988-490990](../../../../../../reference/runtime/host-main.cjs#L490988-L490990) | `FunctionDeclaration` | no | `agent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490988-490990](../../../../../../reference/runtime/host-main.cjs#L490988-L490990) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:490988

Calls written directly in this body: `groupChatPeople`.

SHA-256 of the source span: `d588e495eb87489bce91d46e4f47ee6493935e6e96d03f00e86dc2af0512bb2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
