# `BrainDocsTree.delete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-tree.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629152-629156](../../../../../../reference/runtime/sand-eval-runner.cjs#L629152-L629156) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629152-629156](../../../../../../reference/runtime/sand-eval-runner.cjs#L629152-L629156) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629152

Calls written directly in this body: `this.files.delete`, `this.unlink`.

SHA-256 of the source span: `b45ec7a5cc18f1b8e1d3f46046c729908b5c2e890a58d0df55a917157a19b8a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
