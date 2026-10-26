# `BrainDocsTree.filesUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-tree.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629157-629170](../../../../../../reference/runtime/sand-eval-runner.cjs#L629157-L629170) | `method` | no | `root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629157-629170](../../../../../../reference/runtime/sand-eval-runner.cjs#L629157-L629170) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:629157

Calls written directly in this body: `out.push`, `pending.pop`, `pending.push`, `this.children.get`, `this.children.has`, `this.files.get`.

Assignment or increment targets: `dir`.

SHA-256 of the source span: `daa41615dd7b658b06acb5372316d35cace33618ae3d72a1b7360370966bc1b0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
