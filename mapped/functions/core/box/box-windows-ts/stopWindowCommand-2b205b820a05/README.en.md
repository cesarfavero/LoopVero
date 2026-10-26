# `stopWindowCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553940-553950](../../../../../../reference/runtime/host-main.cjs#L553940-L553950) | `FunctionDeclaration` | no | `windowIndex, ownerToken, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553940-553950](../../../../../../reference/runtime/host-main.cjs#L553940-L553950) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:553940

Calls written directly in this body: `boundUptimeFile`, `exitWhen`, `heldByAnotherSeat`, `readWindowToken`, `reboundWithinQuietPeriod`, `seatTableNames`, `stopWindowAndWaitForX`, `underWindowLock`.

SHA-256 of the source span: `167b2159bf9c2e6f441d0158351864f30d9b5f2500f8ade0092238d5462332e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
