# `SharedDesktopSandBox.reclaimSeats`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554479-554493](../../../../../../reference/runtime/host-main.cjs#L554479-L554493) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554479-554493](../../../../../../reference/runtime/host-main.cjs#L554479-L554493) | 2 | 0 | 4 | 1 | 0 | 0 |

### host:554479

Calls written directly in this body: `.filter`, `this.followCurrentSeatTable`, `this.freeDeletedSeatsOf`, `this.freeStaleUnstartedSeats`, `this.mayReapUnstartedSeats`, `this.refusedForkWindows.clear`.

SHA-256 of the source span: `e4e11c32320a0958a9cc9ea5983a8a879f784e7e1074692b666a19614395c70b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
