# `SharedDesktopSandBox.freeStaleUnstartedSeats`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554494-554519](../../../../../../reference/runtime/host-main.cjs#L554494-L554519) | `method` | yes | `ctx, table` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554494-554519](../../../../../../reference/runtime/host-main.cjs#L554494-L554519) | 4 | 2 | 1 | 0 | 0 | 0 |

### host:554494

Calls written directly in this body: `asyncMapValues`, `freed.map`, `seats.filter`, `seats.push`, `table.tokens.get`, `table.unstarted.get`, `this.agentWindows.get`, `this.dropCachedSeat`, `this.establishedForks.has`, `this.now`, `this.queueSeatChanges`.

SHA-256 of the source span: `8432f3629539cba6fd9351d1c8536fca7e1ea408ba0083105b708b854596733c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
