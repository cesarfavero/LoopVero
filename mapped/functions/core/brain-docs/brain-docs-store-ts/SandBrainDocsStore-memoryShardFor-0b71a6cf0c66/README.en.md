# `SandBrainDocsStore.memoryShardFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629755-629800](../../../../../../reference/runtime/sand-eval-runner.cjs#L629755-L629800) | `method` | no | `scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629755-629800](../../../../../../reference/runtime/sand-eval-runner.cjs#L629755-L629800) | 14 | 0 | 0 | 9 | 3 | 0 |

### evaluation:629755

Calls written directly in this body: `getUserMemoryShardDir`, `memoryPausedRefusal`, `new SandToolInputError`, `stateWriteFailed`, `this.memoryFolder`, `this.options.userMemory`, `this.options.userMemoryWritable`, `this.requireFamily`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `536b5e7a0c39f40c7c26fc3720bff0498965dcc5aad494fd557ce668af3d6c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
