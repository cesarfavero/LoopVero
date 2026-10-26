# `heldByAnotherSeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553867-553871](../../../../../../reference/runtime/host-main.cjs#L553867-L553871) | `FunctionDeclaration` | no | `ownerToken, seatTablePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553867-553871](../../../../../../reference/runtime/host-main.cjs#L553867-L553871) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:553867

Calls written directly in this body: `seatTableNames`.

SHA-256 of the source span: `e5c77c0853f21501378ca875a5b5df42537c62891ea62f6ee606d53869ffb33d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
