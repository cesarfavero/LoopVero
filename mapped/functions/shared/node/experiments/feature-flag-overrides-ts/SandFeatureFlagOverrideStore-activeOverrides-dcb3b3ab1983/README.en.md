# `SandFeatureFlagOverrideStore.activeOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552193-552200](../../../../../../../reference/runtime/host-main.cjs#L552193-L552200) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552193-552200](../../../../../../../reference/runtime/host-main.cjs#L552193-L552200) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:552193

Calls written directly in this body: `new Map`, `result.set`, `this.clock.now`.

SHA-256 of the source span: `ef8ea3bb0e83051f9c07523b7a753dffda1735c228f151836c1f14ce536da9df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
