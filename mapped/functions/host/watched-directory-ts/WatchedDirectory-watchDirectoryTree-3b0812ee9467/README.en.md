# `WatchedDirectory.watchDirectoryTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684404-684417](../../../../../reference/runtime/host-main.cjs#L684404-L684417) | `method` | no | `directory` |
| [evaluation:627728-627741](../../../../../reference/runtime/sand-eval-runner.cjs#L627728-L627741) | `method` | no | `directory` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684404-684417](../../../../../reference/runtime/host-main.cjs#L684404-L684417) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:627728-627741](../../../../../reference/runtime/sand-eval-runner.cjs#L627728-L627741) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:684404

Calls written directly in this body: `isSameDirectory`, `this.armDirectory`, `this.readDirectoryEntry`, `this.unwatchSubtree`, `this.watchers.get`.

SHA-256 of the source span: `93464a69e70648333f41b0a6bb69f2b418e3e8d7e50d31d2dc1a42b589a75a2d`.

### evaluation:627728

Calls written directly in this body: `isSameDirectory`, `this.armDirectory`, `this.readDirectoryEntry`, `this.unwatchSubtree`, `this.watchers.get`.

SHA-256 of the source span: `93464a69e70648333f41b0a6bb69f2b418e3e8d7e50d31d2dc1a42b589a75a2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
