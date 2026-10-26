# `hasMentionAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `core/groups/group-chat.ts` · [Module README](../../../../../modules/core/groups/group-chat-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491291-491301](../../../../../../reference/runtime/host-main.cjs#L491291-L491301) | `FunctionDeclaration` | no | `lower, handle` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491291-491301](../../../../../../reference/runtime/host-main.cjs#L491291-L491301) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:491291

Calls written directly in this body: `isWordChar`, `lower.indexOf`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `d2f6676cd169ee1dceb5cbbdd0a43781ceedacf97dc4b18bb4f913f64530e91e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
