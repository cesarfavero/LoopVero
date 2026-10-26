# `SharedDesktopSandBox.freeDeletedAgentSeats`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554441-554453](../../../../../../reference/runtime/host-main.cjs#L554441-L554453) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554441-554453](../../../../../../reference/runtime/host-main.cjs#L554441-L554453) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:554441

Calls written directly in this body: `.filter`, `this.followCurrentSeatTable`, `this.freeDeletedSeatsOf`.

SHA-256 of the source span: `4087c0e5664b184f4f8b38d277160afa516ccbf23f5e589e9dc9b9e92893b530`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
