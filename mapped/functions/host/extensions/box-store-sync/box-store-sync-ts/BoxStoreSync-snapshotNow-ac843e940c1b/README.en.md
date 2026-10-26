# `BoxStoreSync.snapshotNow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-store-sync.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-store-sync-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481205-481231](../../../../../../../reference/runtime/host-main.cjs#L481205-L481231) | `method` | yes | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481205-481231](../../../../../../../reference/runtime/host-main.cjs#L481205-L481231) | 3 | 1 | 2 | 3 | 0 | 0 |

### host:481205

Calls written directly in this body: `Promise.allSettled`, `this.emptyCycle`, `this.now`, `this.runCycle`.

Assignment or increment targets: `this.cycleInFlight`, `this.flushWaiters`, `this.inFlight`.

SHA-256 of the source span: `682a03a0af3bde407fe81e6083cb913a64b68d071f6aece413d9ade0cf6ba941`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
