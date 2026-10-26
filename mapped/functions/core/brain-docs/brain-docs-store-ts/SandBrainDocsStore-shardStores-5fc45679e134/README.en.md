# `SandBrainDocsStore.shardStores`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629506-629513](../../../../../../reference/runtime/sand-eval-runner.cjs#L629506-L629513) | `method` | no | `shardsDir, overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629506-629513](../../../../../../reference/runtime/sand-eval-runner.cjs#L629506-L629513) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629506

Calls written directly in this body: `.map`, `.sort`, `ids.add`, `new Set`, `overrides.keys`, `this.boxFamilies.has`, `this.subdirectories`.

SHA-256 of the source span: `fad03852321e2984aa1986aaebc878ea51d53813ae2bf83689e3a72459d7e30a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
