# `SandFeatureFlagOverrideStore.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/feature-flag-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552125-552131](../../../../../../../reference/runtime/host-main.cjs#L552125-L552131) | `method` | no | `getCacheDir, flags, clock = realClock, readFile31 = (path33) => (0, import_node_fs49.readFileSync)(path33, "utf-8"), writeFile18 = writeFileAtomic` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552125-552131](../../../../../../../reference/runtime/host-main.cjs#L552125-L552131) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:552125

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.clock`, `this.flags`, `this.getCacheDir`, `this.readFile`, `this.writeFile`.

SHA-256 of the source span: `eba83c89698697470d8d0f0f73f80c9082b3530cafa2ff68c94ef535c1a0ac6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
