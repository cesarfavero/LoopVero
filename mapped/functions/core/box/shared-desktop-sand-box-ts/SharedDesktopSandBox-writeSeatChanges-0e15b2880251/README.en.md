# `SharedDesktopSandBox.writeSeatChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554694-554705](../../../../../../reference/runtime/host-main.cjs#L554694-L554705) | `method` | yes | `ctx, changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554694-554705](../../../../../../reference/runtime/host-main.cjs#L554694-L554705) | 3 | 1 | 2 | 3 | 1 | 0 |

### host:554694

Calls written directly in this body: `applySeatChanges`, `new SeatTableContendedError`, `this.readSeatTableVersion`, `this.replaceSeatTable`.

Assignment or increment targets: `attempt`.

Explicit throw targets: `SeatTableContendedError`.

SHA-256 of the source span: `5b44b8221727535264879bfdd269cddc34019c8dff5ade272fc5dfdd12a895b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
