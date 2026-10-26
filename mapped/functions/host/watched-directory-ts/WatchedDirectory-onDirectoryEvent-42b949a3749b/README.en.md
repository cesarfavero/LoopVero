# `WatchedDirectory.onDirectoryEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684463-684480](../../../../../reference/runtime/host-main.cjs#L684463-L684480) | `method` | no | `directory, filename` |
| [evaluation:627787-627804](../../../../../reference/runtime/sand-eval-runner.cjs#L627787-L627804) | `method` | no | `directory, filename` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684463-684480](../../../../../reference/runtime/host-main.cjs#L684463-L684480) | 5 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627787-627804](../../../../../reference/runtime/sand-eval-runner.cjs#L627787-L627804) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:684463

Calls written directly in this body: `filename.toString`, `this.scheduleNotify`, `this.unwatchSubtree`, `this.watchDirectoryTree`, `this.watchSubdirectoriesOf`.

SHA-256 of the source span: `2809f62841a9862fcccaf0a5626a974d573b6e3414672f6005f885a1c374c013`.

### evaluation:627787

Calls written directly in this body: `filename.toString`, `this.scheduleNotify`, `this.unwatchSubtree`, `this.watchDirectoryTree`, `this.watchSubdirectoriesOf`.

SHA-256 of the source span: `008d08c1f1db30c18641ae79920db167812c2a617c56e14ca0a33f6c80eba41f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
