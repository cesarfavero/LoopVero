# `SandOsNotificationDecider.accountSilently`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703353-703359](../../../../../../reference/runtime/host-main.cjs#L703353-L703359) | `method` | no | `agentId, messageId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703353-703359](../../../../../../reference/runtime/host-main.cjs#L703353-L703359) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:703353

Calls written directly in this body: `.has`, `this.account`, `this.messageHistory.get`.

SHA-256 of the source span: `7a2fc19124fc0085272b97f545fc673d03b9ebf52b7e396b6d2c88afc2ed22a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
