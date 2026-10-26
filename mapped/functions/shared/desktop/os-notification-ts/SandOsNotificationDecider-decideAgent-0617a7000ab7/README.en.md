# `SandOsNotificationDecider.decideAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703313-703323](../../../../../../reference/runtime/host-main.cjs#L703313-L703323) | `method` | no | `agent, input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703313-703323](../../../../../../reference/runtime/host-main.cjs#L703313-L703323) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:703313

Calls written directly in this body: `diffAgentNotificationTransitions`, `this.account`, `this.accountedMessageId.has`, `this.gateTransitions`, `this.previous.set`.

SHA-256 of the source span: `957349f18b222f049f114ec766a1112f35153a333c543d446e93ba4533fdac65`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
