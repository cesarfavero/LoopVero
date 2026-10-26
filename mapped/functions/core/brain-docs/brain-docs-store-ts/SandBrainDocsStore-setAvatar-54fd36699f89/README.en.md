# `SandBrainDocsStore.setAvatar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630034-630071](../../../../../../reference/runtime/sand-eval-runner.cjs#L630034-L630071) | `method` | yes | `{ path: sourcePath2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630034-630071](../../../../../../reference/runtime/sand-eval-runner.cjs#L630034-L630071) | 7 | 0 | 4 | 5 | 0 | 0 |

### evaluation:630034

Calls written directly in this body: `.catch`, `.filter`, `Buffer.from`, `avatarFilenameForExtension`, `extensionForMime`, `isBoxRootPath`, `leftover.join`, `sniffAvatarMimeType`, `sourcePath2.trim`, `stateWriteFailed`, `stateWriteOk`, `this.avatarFilenames`, `this.ensureLoaded`, `this.options.fs.readFile`, `this.options.fs.writeFile`, `this.removeAvatarFiles`, `this.requireFamily`, `this.tree.set`.

SHA-256 of the source span: `0e313b172cace7dc0c620168f29a36a843ad48af043acef8cf2b6bf531cef756`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
