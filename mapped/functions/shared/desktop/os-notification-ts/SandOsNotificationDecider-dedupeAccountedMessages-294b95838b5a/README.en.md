# `SandOsNotificationDecider.dedupeAccountedMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703336-703344](../../../../../../reference/runtime/host-main.cjs#L703336-L703344) | `method` | no | `transitions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703336-703344](../../../../../../reference/runtime/host-main.cjs#L703336-L703344) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703336

Calls written directly in this body: `out.push`, `this.account`, `this.wasAccounted`.

SHA-256 of the source span: `ceae1a33a6d439e73532aeb2629d0013ac34cdc0e72f107f920045a47f5c1dc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
