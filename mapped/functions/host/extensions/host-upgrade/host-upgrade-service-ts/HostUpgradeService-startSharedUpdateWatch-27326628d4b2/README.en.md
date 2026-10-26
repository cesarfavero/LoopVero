# `HostUpgradeService.startSharedUpdateWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681537-681558](../../../../../../../reference/runtime/host-main.cjs#L681537-L681558) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681537-681558](../../../../../../../reference/runtime/host-main.cjs#L681537-L681558) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:681537

Calls written directly in this body: `.catch`, `.then`, `hostBundleWatchInitialDelayMs`, `this.deps.clock.now`, `this.deps.getUpdateWatchIntervalMs`, `this.deps.readLocalVersion`, `this.deps.resolveBundleSource`, `this.deps.updateWatchDueCheckPolicy.start`.

Assignment or increment targets: `this.nextUpdateCheckAtMs`, `this.runRootUpdateTick`, `this.sharedUpdateWatch`, `this.sharedUpdateWatchStarted`.

SHA-256 of the source span: `2d10838d1c827dbc942a764bfeba0b5fe64aac83177797c05075941b5f20c1d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
