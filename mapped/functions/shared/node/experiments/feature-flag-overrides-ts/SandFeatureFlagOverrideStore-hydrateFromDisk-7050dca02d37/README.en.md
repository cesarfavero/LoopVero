# `SandFeatureFlagOverrideStore.hydrateFromDisk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552144-552168](../../../../../../../reference/runtime/host-main.cjs#L552144-L552168) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552144-552168](../../../../../../../reference/runtime/host-main.cjs#L552144-L552168) | 6 | 1 | 0 | 3 | 0 | 1 |

### host:552144

Calls written directly in this body: `JSON.parse`, `Object.entries`, `errorLogTag`, `isStoredFeatureFlagOverride`, `reportExperimentsDiagnostic`, `this.clock.now`, `this.getOverridesPath`, `this.isFlagName`, `this.overrides.set`, `this.readFile`.

SHA-256 of the source span: `2e5b9af43beaa6bcf74e2da70d867330daad1110fac33164f69e099116da13ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
