# `SandExperimentServiceCore.getFeatureFlagOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552768-552770](../../../../../../../reference/runtime/host-main.cjs#L552768-L552770) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552768-552770](../../../../../../../reference/runtime/host-main.cjs#L552768-L552770) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552768

Calls written directly in this body: `this.overrideStore.activeOverrides`.

SHA-256 of the source span: `9bdbc76eb58d0ed9d87a4133367d6061603cb6a7b59bc6b3ec17109d7c29fdb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
