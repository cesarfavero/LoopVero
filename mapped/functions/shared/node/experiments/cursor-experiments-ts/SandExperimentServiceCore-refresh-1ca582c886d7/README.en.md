# `SandExperimentServiceCore.refresh`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553261-553273](../../../../../../../reference/runtime/host-main.cjs#L553261-L553273) | `method` | no | `trigger2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553261-553273](../../../../../../../reference/runtime/host-main.cjs#L553261-L553273) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:553261

Calls written directly in this body: `Promise.resolve`, `this.runRefresh`.

Assignment or increment targets: `this.currentRefresh`, `this.isRefreshing`, `this.pendingRefreshTrigger`.

SHA-256 of the source span: `ad97ad22608f272eba5e375f30a9c97bd95e8a6507041a7c3d0d1e5a197ab74d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
