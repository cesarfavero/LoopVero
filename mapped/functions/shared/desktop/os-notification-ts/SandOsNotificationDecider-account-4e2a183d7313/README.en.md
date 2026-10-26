# `SandOsNotificationDecider.account`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703360-703373](../../../../../../reference/runtime/host-main.cjs#L703360-L703373) | `method` | no | `agentId, messageId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703360-703373](../../../../../../reference/runtime/host-main.cjs#L703360-L703373) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:703360

Calls written directly in this body: `.next`, `history.add`, `history.delete`, `history.has`, `history.values`, `new Set`, `this.accountedMessageId.set`, `this.messageHistory.get`, `this.messageHistory.set`.

Assignment or increment targets: `history`.

SHA-256 of the source span: `11f4cd0b09b3a4e27515b6fac82c27749cfdf48cbc9e0cda36648104c611958b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
