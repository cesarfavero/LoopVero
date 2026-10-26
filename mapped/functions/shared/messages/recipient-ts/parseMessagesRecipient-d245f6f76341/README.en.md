# `parseMessagesRecipient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/recipient.ts` · [Module README](../../../../../modules/shared/messages/recipient-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721645-721649](../../../../../../reference/runtime/host-main.cjs#L721645-L721649) | `FunctionDeclaration` | no | `recipient2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721645-721649](../../../../../../reference/runtime/host-main.cjs#L721645-L721649) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:721645

Calls written directly in this body: `CHAT_GUID.exec`.

SHA-256 of the source span: `87c83345b2f37df3b8945878dd547f6e450c9aad73cef1215d8da1924d36b94d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
