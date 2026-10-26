# `SandOsNotificationDecider.decide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703288-703302](../../../../../../reference/runtime/host-main.cjs#L703288-L703302) | `method` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703288-703302](../../../../../../reference/runtime/host-main.cjs#L703288-L703302) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703288

Calls written directly in this body: `diffAgentNotificationTransitions`, `new Map`, `nextPrevious.set`, `this.account`, `this.accountedMessageId.has`, `this.gateTransitions`.

Assignment or increment targets: `this.previous`.

SHA-256 of the source span: `f0391781059fe7e0e1a47a2745e5c1a7f3848a24dae0fa2ef00f400a87ce75c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
