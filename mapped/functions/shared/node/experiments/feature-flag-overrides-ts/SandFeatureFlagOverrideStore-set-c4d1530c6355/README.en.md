# `SandFeatureFlagOverrideStore.set`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552211-552218](../../../../../../../reference/runtime/host-main.cjs#L552211-L552218) | `method` | no | `name18, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552211-552218](../../../../../../../reference/runtime/host-main.cjs#L552211-L552218) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:552211

Calls written directly in this body: `this.clock.now`, `this.overrides.set`.

SHA-256 of the source span: `4d0c85afe93dd7388e6f4bb66f9f149f9d22785c6886d64b5d9a0771364d7c12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
