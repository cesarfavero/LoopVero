# `isNameChar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491332-491334](../../../../../../reference/runtime/host-main.cjs#L491332-L491334) | `FunctionDeclaration` | no | `char` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491332-491334](../../../../../../reference/runtime/host-main.cjs#L491332-L491334) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491332

Calls written directly in this body: `/[\p{L}\p{N}]/u.test`.

SHA-256 of the source span: `a5b42580d8e923f8d7bbb663ab9586658650677cda5103d7ef328f0425b545e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
