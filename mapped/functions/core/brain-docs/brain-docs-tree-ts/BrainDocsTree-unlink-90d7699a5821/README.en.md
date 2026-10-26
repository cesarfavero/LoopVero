# `BrainDocsTree.unlink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-tree.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629197-629208](../../../../../../reference/runtime/sand-eval-runner.cjs#L629197-L629208) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629197-629208](../../../../../../reference/runtime/sand-eval-runner.cjs#L629197-L629208) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:629197

Calls written directly in this body: `siblings.delete`, `this.children.delete`, `this.children.get`, `this.children.has`, `this.files.has`.

Assignment or increment targets: `child`.

SHA-256 of the source span: `0942ecf985179c66d7410de6bd58ce111ee0f5f8a74069109b2dfb76a99899c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
