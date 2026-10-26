# `SharedDesktopSandBox.queueSeatChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554674-554677](../../../../../../reference/runtime/host-main.cjs#L554674-L554677) | `method` | no | `ctx, changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554674-554677](../../../../../../reference/runtime/host-main.cjs#L554674-L554677) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:554674

Calls written directly in this body: `this.commitSeatChanges`.

SHA-256 of the source span: `0fa6ff84c2e055f8adf2039a68d29779610ec55a74b11aed4c580abe6568ccc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
