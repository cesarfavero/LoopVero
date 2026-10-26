# `mapErrorDetailButtons`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736640-736658](../../../../../../reference/runtime/host-main.cjs#L736640-L736658) | `FunctionDeclaration` | no | `buttons2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736640-736658](../../../../../../reference/runtime/host-main.cjs#L736640-L736658) | 6 | 1 | 0 | 2 | 0 | 0 |

### host:736640

Calls written directly in this body: `actions2.push`, `actions2.unshift`, `buttons2.some`, `destinations.add`, `destinations.has`, `mapErrorDetailButton`, `new Set`, `opensSpendingDashboard`, `trayActionDestination`.

SHA-256 of the source span: `084da9e8b359426a65f4219a2cee66be6defc9f2638dc3b4366096adc2a1cd83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
