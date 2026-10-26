# `groupChatShortNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `shared/agents/group-chat.ts` · [Module README](../../../../../modules/shared/agents/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491004-491013](../../../../../../reference/runtime/host-main.cjs#L491004-L491013) | `FunctionDeclaration` | no | `people` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491004-491013](../../../../../../reference/runtime/host-main.cjs#L491004-L491013) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:491004

Calls written directly in this body: `.filter`, `counts.get`, `counts.set`, `named2.map`, `new Map`, `people.map`.

SHA-256 of the source span: `6dd573c85b6154decea00d9f6fe42b83548158625136626ef29dff723850cb2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
