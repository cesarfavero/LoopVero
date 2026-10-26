# `formatGroupHistory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491396-491400](../../../../../../reference/runtime/host-main.cjs#L491396-L491400) | `FunctionDeclaration` | no | `history, viewerId, limit3 = GROUP_PROMPT_HISTORY_LIMIT` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491396-491400](../../../../../../reference/runtime/host-main.cjs#L491396-L491400) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:491396

Calls written directly in this body: `.join`, `history.slice`, `recent.map`.

SHA-256 of the source span: `ce967c55a7a1218fad892260f2862dd9695f67f2b934b1c011e66087fc792bda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
