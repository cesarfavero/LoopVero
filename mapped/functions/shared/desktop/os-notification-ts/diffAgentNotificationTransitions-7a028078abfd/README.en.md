# `diffAgentNotificationTransitions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/os-notification.ts` · [Module README](../../../../../modules/shared/desktop/os-notification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703197-703247](../../../../../../reference/runtime/host-main.cjs#L703197-L703247) | `FunctionDeclaration` | no | `previous, next` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703197-703247](../../../../../../reference/runtime/host-main.cjs#L703197-L703247) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:703197

Calls written directly in this body: `previous.get`, `transitions.push`.

SHA-256 of the source span: `c6c89c0c620b414f194ad28d1ecf1cfd9c7c10bb895633d6ab0f9475053aeb17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
