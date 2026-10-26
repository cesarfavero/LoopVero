# `groupLineAudience`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491361-491370](../../../../../../reference/runtime/host-main.cjs#L491361-L491370) | `FunctionDeclaration` | no | `line, members2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491361-491370](../../../../../../reference/runtime/host-main.cjs#L491361-L491370) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:491361

Calls written directly in this body: `.map`, `members2.filter`, `named2.add`, `named2.delete`, `new Set`, `parseGroupAddressees`, `parseGroupMentions`.

SHA-256 of the source span: `e88f7924c238b30cabc90e5796390ea7e1c71260f2727f4dc591205eb93d3d89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
