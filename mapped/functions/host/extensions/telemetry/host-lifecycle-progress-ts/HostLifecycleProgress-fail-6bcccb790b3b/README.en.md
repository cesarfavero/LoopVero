# `HostLifecycleProgress.fail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-lifecycle-progress.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-lifecycle-progress-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731524-731535](../../../../../../../reference/runtime/host-main.cjs#L731524-L731535) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731524-731535](../../../../../../../reference/runtime/host-main.cjs#L731524-L731535) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:731524

Calls written directly in this body: `SandError.hostLifecycleFailed`, `this.currentPhase`, `this.elapsedMs`, `this.options.report`, `this.watchdogHandle.dispose`.

Assignment or increment targets: `this.watchdogHandle`.

SHA-256 of the source span: `590300c89267caf5f23bb25a652f74671cdb64caa6d5431490a1f413dadb79b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
