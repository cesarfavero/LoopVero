# `parseGroupAddressees`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491350-491360](../../../../../../reference/runtime/host-main.cjs#L491350-L491360) | `FunctionDeclaration` | no | `text3, members2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491350-491360](../../../../../../reference/runtime/host-main.cjs#L491350-L491360) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:491350

Calls written directly in this body: `.replace`, `.some`, `memberIds.add`, `memberNameHandles`, `new Set`, `parseGroupMentions`, `text3.toLowerCase`.

SHA-256 of the source span: `f548a27b441f5525bf92713dbd18ce8860092ecdd493a3cf47b80feabae0de2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
