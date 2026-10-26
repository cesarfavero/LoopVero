# `SandBrainDocsStore.load`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629366-629380](../../../../../../reference/runtime/sand-eval-runner.cjs#L629366-L629380) | `method` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629366-629380](../../../../../../reference/runtime/sand-eval-runner.cjs#L629366-L629380) | 1 | 0 | 1 | 1 | 0 | 0 |

### evaluation:629366

Calls written directly in this body: `.finally`, `.then`, `brainDocsRoots`, `new BrainDocsTree`, `this.options.fs.readTree`.

Assignment or increment targets: `this.loaded`, `this.loading`, `this.tree`.

SHA-256 of the source span: `e74eded193ac55495dea98ac50a77bfc360067332022d8dbb331fd44d9ae9efe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
