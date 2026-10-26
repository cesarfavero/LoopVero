# `SandBrainDocsStore.shardRecalls`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629514-629522](../../../../../../reference/runtime/sand-eval-runner.cjs#L629514-L629522) | `method` | no | `shardsDir, recentLimit, overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629514-629522](../../../../../../reference/runtime/sand-eval-runner.cjs#L629514-L629522) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629514

Calls written directly in this body: `shards.push`, `store.recall`, `this.shardStores`, `this.shardVia`.

SHA-256 of the source span: `3a00434a2ae7749ebf40ced0a5f1966b61264663a16118201c46c67fb9165565`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
