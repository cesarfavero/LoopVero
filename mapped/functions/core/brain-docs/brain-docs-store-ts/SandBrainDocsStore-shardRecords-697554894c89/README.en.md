# `SandBrainDocsStore.shardRecords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629523-629529](../../../../../../reference/runtime/sand-eval-runner.cjs#L629523-L629529) | `method` | no | `shardsDir, overrides` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629523-629529](../../../../../../reference/runtime/sand-eval-runner.cjs#L629523-L629529) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629523

Calls written directly in this body: `.map`, `this.shardStores`.

SHA-256 of the source span: `b93c92fd84e1efb9842374a757a4a5241148cf73c05d955f6b0df756c6498f49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
