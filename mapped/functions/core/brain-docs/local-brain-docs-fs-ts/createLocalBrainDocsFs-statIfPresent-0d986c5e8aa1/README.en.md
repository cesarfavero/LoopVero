# `createLocalBrainDocsFs/statIfPresent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/local-brain-docs-fs.ts` · [Module README](../../../../../modules/core/brain-docs/local-brain-docs-fs-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784721-784728](../../../../../../reference/runtime/host-main.cjs#L784721-L784728) | `FunctionDeclaration` | yes | `path33` |
| [evaluation:630118-630125](../../../../../../reference/runtime/sand-eval-runner.cjs#L630118-L630125) | `FunctionDeclaration` | yes | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784721-784728](../../../../../../reference/runtime/host-main.cjs#L784721-L784728) | 1 | 0 | 1 | 2 | 1 | 1 |
| [evaluation:630118-630125](../../../../../../reference/runtime/sand-eval-runner.cjs#L630118-L630125) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:784721

Calls written directly in this body: `findSystemErrno`, `io2.stat`, `isMissingPath2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `a91af046cffd0354f0bb9d283189995594d5754141c9e2c6c7485c3d20baded8`.

### evaluation:630118

Calls written directly in this body: `findSystemErrno`, `io2.stat`, `isMissingPath`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `a25890edf7859b40372472b5d4c17d5a79737bd9104e28a785a201fd9298f125`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
