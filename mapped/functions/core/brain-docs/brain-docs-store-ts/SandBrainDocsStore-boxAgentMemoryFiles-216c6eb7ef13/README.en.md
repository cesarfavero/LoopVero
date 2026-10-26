# `SandBrainDocsStore.boxAgentMemoryFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629490-629493](../../../../../../reference/runtime/sand-eval-runner.cjs#L629490-L629493) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629490-629493](../../../../../../reference/runtime/sand-eval-runner.cjs#L629490-L629493) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629490

Calls written directly in this body: `getAgentMemoryDir`, `this.boxFamilies.has`, `this.memoryFiles`.

SHA-256 of the source span: `69cad5b72d95c57512ec22183e6a1d1d7e51a2954dc8a78051391e360efeec0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
