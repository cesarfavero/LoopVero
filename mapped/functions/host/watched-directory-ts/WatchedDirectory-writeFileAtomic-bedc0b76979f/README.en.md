# `WatchedDirectory.writeFileAtomic`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/watched-directory.ts` · [Module README](../../../../modules/host/watched-directory-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684499-684502](../../../../../reference/runtime/host-main.cjs#L684499-L684502) | `method` | no | `path33, contents` |
| [evaluation:627823-627826](../../../../../reference/runtime/sand-eval-runner.cjs#L627823-L627826) | `method` | no | `path33, contents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684499-684502](../../../../../reference/runtime/host-main.cjs#L684499-L684502) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627823-627826](../../../../../reference/runtime/sand-eval-runner.cjs#L627823-L627826) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684499

Calls written directly in this body: `this.scheduleNotify`, `writeSandDataFileSync`.

SHA-256 of the source span: `84b70d8787c7caf61d07deef01e89d196c1ff2b8495b2f1d477da0d39f41ca63`.

### evaluation:627823

Calls written directly in this body: `this.scheduleNotify`, `writeSandDataFileSync`.

SHA-256 of the source span: `84b70d8787c7caf61d07deef01e89d196c1ff2b8495b2f1d477da0d39f41ca63`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
