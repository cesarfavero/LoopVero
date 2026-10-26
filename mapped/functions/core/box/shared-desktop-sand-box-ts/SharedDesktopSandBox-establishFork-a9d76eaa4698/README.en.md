# `SharedDesktopSandBox.establishFork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554844-554870](../../../../../../reference/runtime/host-main.cjs#L554844-L554870) | `method` | yes | `ctx, agentId, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554844-554870](../../../../../../reference/runtime/host-main.cjs#L554844-L554870) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:554844

Calls written directly in this body: `this.agentWindowTokens.get`, `this.agentWindows.get`, `this.commitSeatChanges`, `this.downForks.add`, `this.downForks.delete`, `this.dropCachedSeat`, `this.establishedForks.add`, `this.holdsSeat`, `this.unstartedSeats.delete`, `this.unstartedTokens.delete`, `this.unstartedTokens.has`, `this.windowStillOwned`.

SHA-256 of the source span: `0f6ed75ffb3c9400e7786e4d6b2077b43d1aa3f92d613c19368609a9e2710c82`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
