# `createOrbitDaemonSessionController/scheduleRenewal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706054-706071](../../../../../../../reference/runtime/host-main.cjs#L706054-L706071) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706054-706071](../../../../../../../reference/runtime/host-main.cjs#L706054-L706071) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:706054

Calls written directly in this body: `Math.max`, `Number`, `deps.clock.monotonicNow`, `deps.clock.schedule`, `maybeResolveDisposal`.

Assignment or increment targets: `state.scheduledWake`.

SHA-256 of the source span: `78b798f7f8e3ce18f8e5d6f82cc684f0518ab17f69e18efe20776b4efc02dc5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
