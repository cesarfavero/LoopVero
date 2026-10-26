# `assertMembersAreNotGroups`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491275-491278](../../../../../../reference/runtime/host-main.cjs#L491275-L491278) | `FunctionDeclaration` | no | `requestedMemberIds, isGroupId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491275-491278](../../../../../../reference/runtime/host-main.cjs#L491275-L491278) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:491275

Calls written directly in this body: `.filter`, `new SandGroupNestingError`, `new Set`.

Explicit throw targets: `SandGroupNestingError`.

SHA-256 of the source span: `37c2248d3f6eabec9a8a3a9fe5767b7b80b3ec3fbd1d413035475bdcbadf6334`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
