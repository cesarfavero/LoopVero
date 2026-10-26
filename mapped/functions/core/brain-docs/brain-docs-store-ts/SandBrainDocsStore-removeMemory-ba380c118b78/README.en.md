# `SandBrainDocsStore.removeMemory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629825-629842](../../../../../../reference/runtime/sand-eval-runner.cjs#L629825-L629842) | `method` | yes | `{     content,     scope = this.defaultMemoryScope(),     folder   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629825-629842](../../../../../../reference/runtime/sand-eval-runner.cjs#L629825-L629842) | 6 | 0 | 2 | 4 | 0 | 0 |

### evaluation:629825

Calls written directly in this body: `normalizeMemoryContent`, `shard.store.removeMemoryByContent`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.flush`, `this.lookupHint`, `this.memoryShardFor`.

SHA-256 of the source span: `69f2ad902f16bfb93716644f48dca3c6de2a09c70d447ff1632de06ec2ab77fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
