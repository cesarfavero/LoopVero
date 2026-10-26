# `SandOsNotificationDecider.seedBaseline`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703303-703312](../../../../../../reference/runtime/host-main.cjs#L703303-L703312) | `method` | no | `agents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703303-703312](../../../../../../reference/runtime/host-main.cjs#L703303-L703312) | 2 | 1 | 0 | 0 | 0 | 0 |

### host:703303

Calls written directly in this body: `this.account`, `this.accountedMessageId.has`, `this.previous.has`, `this.previous.set`.

SHA-256 of the source span: `6faca092e874e662c8c2c962287a5174ecff44fba1377c8c76bcca37a77c4929`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
