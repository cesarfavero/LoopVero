# `SandBrainDocsStore.boxUserMemoryShardIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629498-629501](../../../../../../reference/runtime/sand-eval-runner.cjs#L629498-L629501) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629498-629501](../../../../../../reference/runtime/sand-eval-runner.cjs#L629498-L629501) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629498

Calls written directly in this body: `getUserMemoryShardsDir`, `this.boxFamilies.has`, `this.subdirectories`.

SHA-256 of the source span: `c69777fef746d5411884f135c70738f4f462e243d93fc716cc7187c35eb1a847`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
