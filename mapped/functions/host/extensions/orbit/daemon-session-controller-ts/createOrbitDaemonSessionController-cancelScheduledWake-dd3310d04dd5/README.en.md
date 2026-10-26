# `createOrbitDaemonSessionController/cancelScheduledWake`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706086-706090](../../../../../../../reference/runtime/host-main.cjs#L706086-L706090) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706086-706090](../../../../../../../reference/runtime/host-main.cjs#L706086-L706090) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706086

Calls written directly in this body: `wake.dispose`.

Assignment or increment targets: `state.scheduledWake`.

SHA-256 of the source span: `6e08fab5f15367f144d91a09f5d8e9efa340c0c13dd42cd660e8a7abd7b3e898`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
