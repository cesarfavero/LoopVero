# `BrainDocsTree.hasFilesUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-tree.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-tree-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629178-629180](../../../../../../reference/runtime/sand-eval-runner.cjs#L629178-L629180) | `method` | no | `root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629178-629180](../../../../../../reference/runtime/sand-eval-runner.cjs#L629178-L629180) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629178

Calls written directly in this body: `this.children.has`, `this.files.has`.

SHA-256 of the source span: `419fa15e28d667af488cff4708d9165e0eba11bcaea05ffbadfe9c395eea60fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
