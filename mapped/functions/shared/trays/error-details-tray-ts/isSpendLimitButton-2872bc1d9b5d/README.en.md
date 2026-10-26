# `isSpendLimitButton`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736545-736547](../../../../../../reference/runtime/host-main.cjs#L736545-L736547) | `FunctionDeclaration` | no | `button` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736545-736547](../../../../../../reference/runtime/host-main.cjs#L736545-L736547) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736545

Calls written directly in this body: `SPENDING_DASHBOARD_ACTION_VERBS.has`.

SHA-256 of the source span: `fd8991ebb4ad1eb7233fa226bbbd3ec121541229ccf7e43eb5f835068192ba57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
