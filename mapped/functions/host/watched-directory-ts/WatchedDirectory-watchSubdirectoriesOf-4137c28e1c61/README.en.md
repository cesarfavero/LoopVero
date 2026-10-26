# `WatchedDirectory.watchSubdirectoriesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684435-684439](../../../../../reference/runtime/host-main.cjs#L684435-L684439) | `method` | no | `directory` |
| [evaluation:627759-627763](../../../../../reference/runtime/sand-eval-runner.cjs#L627759-L627763) | `method` | no | `directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684435-684439](../../../../../reference/runtime/host-main.cjs#L684435-L684439) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627759-627763](../../../../../reference/runtime/sand-eval-runner.cjs#L627759-L627763) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:684435

Calls written directly in this body: `this.listSubdirectoryNamesOf`, `this.watchDirectoryTree`.

SHA-256 of the source span: `88e8191ce336e5b846bec5bed12ef9f95b010d04dfdde24c7692e7871c2b0cec`.

### evaluation:627759

Calls written directly in this body: `this.listSubdirectoryNamesOf`, `this.watchDirectoryTree`.

SHA-256 of the source span: `05bec9f7b8a39fb4361fffb681e19f1392dbd68924f494b68b721a9c3e7a9edb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
