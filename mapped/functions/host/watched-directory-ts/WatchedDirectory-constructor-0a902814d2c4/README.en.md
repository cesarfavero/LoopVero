# `WatchedDirectory.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684355-684360](../../../../../reference/runtime/host-main.cjs#L684355-L684360) | `method` | no | `root, debounce, watchDirectory = watchDirectoryWithNodeFs, lstat13 = import_node_fs70.lstatSync` |
| [evaluation:627679-627684](../../../../../reference/runtime/sand-eval-runner.cjs#L627679-L627684) | `method` | no | `root, debounce, watchDirectory = watchDirectoryWithNodeFs, lstat2 = import_node_fs30.lstatSync` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684355-684360](../../../../../reference/runtime/host-main.cjs#L684355-L684360) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627679-627684](../../../../../reference/runtime/sand-eval-runner.cjs#L627679-L627684) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684355

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.debounce`, `this.lstat`, `this.root`, `this.watchDirectory`.

SHA-256 of the source span: `45b600a4db3907a68b95d1df60eb794fe9c9bcf81d253fe12a89cdfb2a51390e`.

### evaluation:627679

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.debounce`, `this.lstat`, `this.root`, `this.watchDirectory`.

SHA-256 of the source span: `021a08d26ea099d846816074b78161a783f2d50179244a0db6dbe327bebc4871`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
