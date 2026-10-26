# `SharedDesktopSandBox.freeDeletedAgentSeatsOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554430-554440](../../../../../../reference/runtime/host-main.cjs#L554430-L554440) | `method` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554430-554440](../../../../../../reference/runtime/host-main.cjs#L554430-L554440) | 2 | 0 | 1 | 0 | 1 | 1 |

### host:554430

Calls written directly in this body: `this.freeDeletedAgentSeats`.

Assignment or increment targets: `swept`, `this.deletedAgentSeatsFreed`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `51e663617c7b0994cfc0b68f0f7f050e1c1d27d2a72f4cfc5f6d4ccb10602c76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
