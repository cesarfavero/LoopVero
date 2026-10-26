# `isUnifiedRailUpgrade`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736542-736544](../../../../../../reference/runtime/host-main.cjs#L736542-L736544) | `FunctionDeclaration` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736542-736544](../../../../../../reference/runtime/host-main.cjs#L736542-L736544) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736542

Calls written directly in this body: `UNIFIED_PLAN_TIERS.has`.

SHA-256 of the source span: `4b585f41fb50f9b840851a065073a302edcb5c080d09010a71f09a132c3a80d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
