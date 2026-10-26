# `SandExperimentServiceCore.setIsAnysphereUser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552749-552762](../../../../../../../reference/runtime/host-main.cjs#L552749-L552762) | `method` | no | `isAnysphereUser` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552749-552762](../../../../../../../reference/runtime/host-main.cjs#L552749-L552762) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:552749

Calls written directly in this body: `this.canUseFeatureFlagOverrides`, `this.experimentOverrideStore.clearAll`, `this.overrideStore.clearAll`, `this.overrideStore.hydrateFromDisk`, `this.refreshSnapshot`.

Assignment or increment targets: `this.isAnysphereUser`.

SHA-256 of the source span: `17b35cf6b5a737d90c5c8e068375142a9e0d7176bcec979f57afb6c9e4c78a38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
