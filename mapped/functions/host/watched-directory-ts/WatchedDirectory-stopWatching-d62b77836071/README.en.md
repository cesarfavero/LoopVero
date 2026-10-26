# `WatchedDirectory.stopWatching`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684396-684403](../../../../../reference/runtime/host-main.cjs#L684396-L684403) | `method` | no | `(none)` |
| [evaluation:627720-627727](../../../../../reference/runtime/sand-eval-runner.cjs#L627720-L627727) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684396-684403](../../../../../reference/runtime/host-main.cjs#L684396-L684403) | 0 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627720-627727](../../../../../reference/runtime/sand-eval-runner.cjs#L627720-L627727) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:684396

Calls written directly in this body: `armed.watcher.close`, `this.notify.dispose`, `this.watchers.clear`, `this.watchers.values`.

Assignment or increment targets: `this.notify`.

SHA-256 of the source span: `3c531dfdc74db54c58ed60310ed01dfcd527ee658e6f5671bff68b0d89cb3553`.

### evaluation:627720

Calls written directly in this body: `armed.watcher.close`, `this.notify.dispose`, `this.watchers.clear`, `this.watchers.values`.

Assignment or increment targets: `this.notify`.

SHA-256 of the source span: `3c531dfdc74db54c58ed60310ed01dfcd527ee658e6f5671bff68b0d89cb3553`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
