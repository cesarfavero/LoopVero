# `LoopbackSandBox.waitUntilReadyUncoordinated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679476-679533](../../../../../../reference/runtime/host-main.cjs#L679476-L679533) | `method` | yes | `ctx, endpoint, timeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679476-679533](../../../../../../reference/runtime/host-main.cjs#L679476-L679533) | 10 | 1 | 2 | 1 | 1 | 0 |

### host:679476

Calls written directly in this body: `Date.now`, `daemonPingReadinessState`, `new SandBoxDaemonUnreachableError`, `this.pingBoxClassified`, `this.startDaemonWatchdog`, `this.telemetry.reportDaemonPing`.

Assignment or increment targets: `attempts2`, `last`, `this.daemonWatchdogState`, `this.daemonWatchdogUnreadyAttempts`, `this.daemonWatchdogUnreadySince`, `unreadySince`.

Explicit throw targets: `SandBoxDaemonUnreachableError`.

SHA-256 of the source span: `8c32966afad8b3399ebdbe526f947bc06f3c01b178e6520daafa722999bda1fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
