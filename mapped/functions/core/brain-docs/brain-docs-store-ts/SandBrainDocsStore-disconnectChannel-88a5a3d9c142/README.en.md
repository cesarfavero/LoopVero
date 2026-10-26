# `SandBrainDocsStore.disconnectChannel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630015-630028](../../../../../../reference/runtime/sand-eval-runner.cjs#L630015-L630028) | `method` | yes | `{     platform   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630015-630028](../../../../../../reference/runtime/sand-eval-runner.cjs#L630015-L630028) | 1 | 0 | 2 | 2 | 0 | 0 |

### evaluation:630015

Calls written directly in this body: `isSafeFolderId`, `stateWriteFailed`, `stateWriteOk`, `this.ensureLoaded`, `this.removeTree`, `this.requireFamily`, `this.tree.hasFilesUnder`.

SHA-256 of the source span: `3abf345d0063a1f78099405121b0db6f0dd2350f739228e359a91727076cc39b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
