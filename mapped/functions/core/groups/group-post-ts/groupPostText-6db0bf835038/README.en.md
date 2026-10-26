# `groupPostText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-post.ts` · [Module README](../../../../../modules/core/groups/group-post-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708128-708199](../../../../../../reference/runtime/host-main.cjs#L708128-L708199) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708128-708199](../../../../../../reference/runtime/host-main.cjs#L708128-L708199) | 35 | 0 | 0 | 32 | 0 | 0 |

### host:708128

Calls written directly in this body: `.join`, `message.approval.items.map`, `message.connectors.join`, `message.credentialRequest.entries.map`, `message.draft.to.join`, `message.request.secrets.map`, `message.title.trim`, `summarizeWidget`.

SHA-256 of the source span: `0d67a2d280f3c9049dc82a6e67c8b488a0a5be8f2a779e1e8aa14ae329a5b24e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
