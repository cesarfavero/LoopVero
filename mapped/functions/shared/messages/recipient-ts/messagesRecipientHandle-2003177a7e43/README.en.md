# `messagesRecipientHandle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/recipient.ts` · [Module README](../../../../../modules/shared/messages/recipient-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721650-721653](../../../../../../reference/runtime/host-main.cjs#L721650-L721653) | `FunctionDeclaration` | no | `recipient2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721650-721653](../../../../../../reference/runtime/host-main.cjs#L721650-L721653) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:721650

Calls written directly in this body: `parseMessagesRecipient`.

SHA-256 of the source span: `904d6cfb920faee232a76f320c4f8825c20d4706719364edb6495a0ce43f44ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
