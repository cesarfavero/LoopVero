# `SandBrainDocsStore.writeMemory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629807-629824](../../../../../../reference/runtime/sand-eval-runner.cjs#L629807-L629824) | `method` | yes | `write2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629807-629824](../../../../../../reference/runtime/sand-eval-runner.cjs#L629807-L629824) | 6 | 0 | 2 | 4 | 0 | 0 |

### evaluation:629807

Calls written directly in this body: `content.trim`, `shard.store.addMemory`, `stateWriteFailed`, `stateWriteOk`, `this.defaultMemoryScope`, `this.ensureLoaded`, `this.flush`, `this.lookupHint`, `this.memoryShardFor`, `this.now`.

SHA-256 of the source span: `4fa8e24fa2990502728530c59af20c8738c77ef01aa1abedb52fffa3e8283bea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
