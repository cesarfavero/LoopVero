# `SandBrainDocsStore.textFilesUnder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629390-629392](../../../../../../reference/runtime/sand-eval-runner.cjs#L629390-L629392) | `method` | no | `root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629390-629392](../../../../../../reference/runtime/sand-eval-runner.cjs#L629390-L629392) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:629390

Calls written directly in this body: `.filter`, `this.filesUnder`.

SHA-256 of the source span: `145def52148114fa2399f8dcb3f0aa056730c08b529f2b5b94502793b3199bf7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
