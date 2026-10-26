# `UpgradeRecreateResume.abandonOverBudgetUpgradePause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/upgrade-recreate-resume.ts` · [Module README](../../../../../../modules/host/extensions/transcript/upgrade-recreate-resume-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740491-740503](../../../../../../../reference/runtime/host-main.cjs#L740491-L740503) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740491-740503](../../../../../../../reference/runtime/host-main.cjs#L740491-L740503) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:740491

Calls written directly in this body: `refuseSwapRunningTurns`, `this.releasePauseState`, `this.runningTurns`, `this.tm.clock.now`.

Assignment or increment targets: `this.upgradeRetryNotBeforeMs`.

SHA-256 of the source span: `5b2645a3fcdcdde3853210eba3ddc502889952b11ce60e33a40f0a3fce065132`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
