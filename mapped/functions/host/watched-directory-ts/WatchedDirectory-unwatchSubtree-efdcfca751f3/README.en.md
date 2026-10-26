# `WatchedDirectory.unwatchSubtree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684481-684489](../../../../../reference/runtime/host-main.cjs#L684481-L684489) | `method` | no | `path33` |
| [evaluation:627805-627813](../../../../../reference/runtime/sand-eval-runner.cjs#L627805-L627813) | `method` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684481-684489](../../../../../reference/runtime/host-main.cjs#L684481-L684489) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:627805-627813](../../../../../reference/runtime/sand-eval-runner.cjs#L627805-L627813) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:684481

Calls written directly in this body: `armed.watcher.close`, `this.watchers.delete`, `watched.startsWith`.

SHA-256 of the source span: `34ba792a07db576b2acc40ce2095145a753206b3f7ccb95f9c8df7303f8b2f4d`.

### evaluation:627805

Calls written directly in this body: `armed.watcher.close`, `this.watchers.delete`, `watched.startsWith`.

SHA-256 of the source span: `70ad55d65de57d37488e004c71a6172ecfcabe7c50cb1abc34212b8358427913`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
