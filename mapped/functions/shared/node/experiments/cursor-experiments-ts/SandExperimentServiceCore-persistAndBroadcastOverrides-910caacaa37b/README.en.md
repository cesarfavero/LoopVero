# `SandExperimentServiceCore.persistAndBroadcastOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552821-552827](../../../../../../../reference/runtime/host-main.cjs#L552821-L552827) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552821-552827](../../../../../../../reference/runtime/host-main.cjs#L552821-L552827) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552821

Calls written directly in this body: `Promise.all`, `this.overrideStore.persist`, `this.refreshSnapshot`.

Assignment or increment targets: `this.pendingOverrideWrites`.

SHA-256 of the source span: `1de029dba1df8f49bdbe16a8e3a01b751ab57ec4d5cfb77304049195f6d0b92f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
