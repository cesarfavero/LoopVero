# `SandOsNotificationDecider.retainOnly`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703374-703378](../../../../../../reference/runtime/host-main.cjs#L703374-L703378) | `method` | no | `agentIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703374-703378](../../../../../../reference/runtime/host-main.cjs#L703374-L703378) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:703374

Calls written directly in this body: `agentIds.has`, `this.accountedMessageId.keys`, `this.forget`, `this.previous.keys`.

SHA-256 of the source span: `a77cab04d23947516092b0013cf24647bcd1a91eb240762cdaac779fac31bd81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
