# `MemoryFolderView.listMemories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629278-629284](../../../../../../reference/runtime/sand-eval-runner.cjs#L629278-L629284) | `method` | no | `limit3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629278-629284](../../../../../../reference/runtime/sand-eval-runner.cjs#L629278-L629284) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629278

Calls written directly in this body: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`, `this.facts`.

SHA-256 of the source span: `3c1ffb34f05496d57c06933d371602527aef50bbf1eb7ce6b83efea579b9d0dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
