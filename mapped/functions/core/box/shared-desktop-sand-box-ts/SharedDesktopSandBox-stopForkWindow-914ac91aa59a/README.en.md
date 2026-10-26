# `SharedDesktopSandBox.stopForkWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554555-554572](../../../../../../reference/runtime/host-main.cjs#L554555-L554572) | `method` | no | `ctx, seat, opts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554555-554572](../../../../../../reference/runtime/host-main.cjs#L554555-L554572) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:554555

Calls written directly in this body: `.then`, `Promise.resolve`, `inFlight.stopped.then`, `stopped2.then`, `this.windowStops.get`, `this.windowStops.set`.

SHA-256 of the source span: `a981d9f55afff8b22f70898e79ef7a6e620dcaa3293999235f6a1258050a8311`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
