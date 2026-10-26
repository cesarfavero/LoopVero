# `HostUpgradeService.prepareForUpgradeOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/host-upgrade-service.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/host-upgrade-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681646-681670](../../../../../../../reference/runtime/host-main.cjs#L681646-L681670) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681646-681670](../../../../../../../reference/runtime/host-main.cjs#L681646-L681670) | 4 | 0 | 7 | 5 | 1 | 1 |

### host:681646

Calls written directly in this body: `refuseSwapRunningTurns`, `this.abandonOverBudgetUpgradePause`, `this.deps.automations.suspendWakes`, `this.deps.transcript.cancelForcedUpgradePause`, `this.deps.transcript.isForcedUpgradePauseActive`, `this.deps.transcript.pauseTurnsForUpgrade`, `this.resumeBackgroundWorkIfUnpaused`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `a5b0a03c5c71e21070ad690ba92a117c43d0475780e33f43a6c59e0eb8e08abf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
