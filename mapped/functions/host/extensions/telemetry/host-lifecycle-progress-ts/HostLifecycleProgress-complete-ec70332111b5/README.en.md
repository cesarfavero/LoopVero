# `HostLifecycleProgress.complete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-lifecycle-progress.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-lifecycle-progress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731507-731523](../../../../../../../reference/runtime/host-main.cjs#L731507-L731523) | `method` | no | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731507-731523](../../../../../../../reference/runtime/host-main.cjs#L731507-L731523) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:731507

Calls written directly in this body: `invariant`, `this.armWatchdog`, `this.currentPhase`, `this.elapsedMs`, `this.options.now`, `this.options.report`, `this.watchdogHandle.dispose`.

Assignment or increment targets: `this.phaseIndex`, `this.phaseStartedAt`, `this.watchdogHandle`.

SHA-256 of the source span: `e1f064c97560bcf838783613e2d062f5d696b116bc477146584de449f0ec81d2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
