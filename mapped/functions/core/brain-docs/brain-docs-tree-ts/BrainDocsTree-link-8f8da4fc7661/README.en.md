# `BrainDocsTree.link`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-tree.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629181-629196](../../../../../../reference/runtime/sand-eval-runner.cjs#L629181-L629196) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629181-629196](../../../../../../reference/runtime/sand-eval-runner.cjs#L629181-L629196) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:629181

Calls written directly in this body: `new Set`, `siblings.add`, `siblings.has`, `this.children.get`, `this.children.set`.

Assignment or increment targets: `child`.

SHA-256 of the source span: `6afe6ecff5431bc429869f2a86d83e7fe4644bfdb1f0f3e029ae5dee6e4b8488`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
