# `SandBrainDocsStore.removeTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629407-629412](../../../../../../reference/runtime/sand-eval-runner.cjs#L629407-L629412) | `method` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629407-629412](../../../../../../reference/runtime/sand-eval-runner.cjs#L629407-L629412) | 0 | 1 | 1 | 1 | 0 | 0 |

### evaluation:629407

Calls written directly in this body: `this.filesUnder`, `this.options.fs.removePath`, `this.tree.delete`, `this.tree.hasFilesUnder`.

SHA-256 of the source span: `0edcf315551bc16367b1736f8b58894214c2a16d8f36f295316c816fa0d82d46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
