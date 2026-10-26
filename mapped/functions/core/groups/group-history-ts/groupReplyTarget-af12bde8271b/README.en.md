# `groupReplyTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-history.ts` · [Module README](../../../../../modules/core/groups/group-history-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:737625-737644](../../../../../../reference/runtime/host-main.cjs#L737625-L737644) | `FunctionDeclaration` | no | `entriesById, replyToId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:737625-737644](../../../../../../reference/runtime/host-main.cjs#L737625-L737644) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:737625

Calls written directly in this body: `.slice`, `.trim`, `entriesById.get`, `groupPostText`, `rawQuote.replace`.

Assignment or increment targets: `rawQuote`, `speaker`.

SHA-256 of the source span: `c903a1b9f0c5385798e29ff7364ff19f40b584439af37c9635fa47458618e9b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
