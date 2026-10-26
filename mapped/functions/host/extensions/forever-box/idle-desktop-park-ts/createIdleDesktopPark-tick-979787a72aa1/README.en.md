# `createIdleDesktopPark/tick`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/idle-desktop-park.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680031-680102](../../../../../../../reference/runtime/host-main.cjs#L680031-L680102) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680031-680102](../../../../../../../reference/runtime/host-main.cjs#L680031-L680102) | 10 | 2 | 2 | 5 | 0 | 1 |

### host:680031

Calls written directly in this body: `Math.floor`, `decideDesktopParks`, `deps.clock.monotonicNow`, `deps.desktops.parkAgentWindow`, `deps.desktops.snapshotForkDesktops`, `deps.liveAgentIds`, `deps.log`, `deps.readConfig`, `elapsedMs`, `errorLogTag`, `new Set`, `parseAgentId`, `results.push`, `seatKey`, `seatKeys.has`, `snapshot.seats.filter`, `snapshot.seats.map`, `unparked2.clear`, `unparked2.delete`, `unparked2.get`, `unparked2.keys`, `unparked2.set`.

Assignment or increment targets: `idleClockStartMs`, `lastReading`, `outcome`, `unsupportedSince`.

SHA-256 of the source span: `7e4043565b7bfb250ee5e357981e8c9e7d2be1fea61620ac9311f38b90851bc2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
