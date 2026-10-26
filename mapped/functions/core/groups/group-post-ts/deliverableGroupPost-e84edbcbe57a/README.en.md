# `deliverableGroupPost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-post.ts` · [Module README](../../../../../modules/core/groups/group-post-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708203-708215](../../../../../../reference/runtime/host-main.cjs#L708203-L708215) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708203-708215](../../../../../../reference/runtime/host-main.cjs#L708203-L708215) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:708203

Calls written directly in this body: `content.endsWith`, `isRoomSettleBoundPost`, `message.content.slice`, `message.content.startsWith`, `stripLeadingPass`.

SHA-256 of the source span: `231858222da96436495a70fdbf295cb91a4afe035697cc339b9a361a8befd2bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
