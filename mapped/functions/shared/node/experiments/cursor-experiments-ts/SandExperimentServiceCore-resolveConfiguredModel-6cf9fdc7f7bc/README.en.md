# `SandExperimentServiceCore.resolveConfiguredModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553205-553215](../../../../../../../reference/runtime/host-main.cjs#L553205-L553215) | `method` | no | `configName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553205-553215](../../../../../../../reference/runtime/host-main.cjs#L553205-L553215) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:553205

Calls written directly in this body: `Object.hasOwn`, `resolveSandDefaultModelConfig`, `this.getDynamicConfig`, `this.hasHydratedStatsigUserId`, `this.reportModelConfigRejection`.

SHA-256 of the source span: `a7df14163b53281611bea26b95310a9d2ecf8a1a7f3d6e1f8faf59ba126dc521`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
