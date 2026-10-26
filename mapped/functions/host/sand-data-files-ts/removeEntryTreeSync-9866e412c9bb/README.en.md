# `removeEntryTreeSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453985-454009](../../../../../reference/runtime/host-main.cjs#L453985-L454009) | `FunctionDeclaration` | no | `parentFd, logicalPath, name18` |
| [evaluation:627585-627609](../../../../../reference/runtime/sand-eval-runner.cjs#L627585-L627609) | `FunctionDeclaration` | no | `parentFd, logicalPath, name18` |
| [state-worker:586-610](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L586-L610) | `FunctionDeclaration` | no | `parentFd, logicalPath, name` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453985-454009](../../../../../reference/runtime/host-main.cjs#L453985-L454009) | 3 | 1 | 0 | 2 | 2 | 2 |
| [evaluation:627585-627609](../../../../../reference/runtime/sand-eval-runner.cjs#L627585-L627609) | 3 | 1 | 0 | 2 | 2 | 2 |
| [state-worker:586-610](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L586-L610) | 3 | 1 | 0 | 2 | 2 | 2 |

### host:453985

Calls written directly in this body: `descriptorDirOf`, `entryOf2`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Assignment or increment targets: `fd`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `84e79c565ad753d2cc9fd81997289fef839df0c2674041d539d19287bc8d708b`.

### evaluation:627585

Calls written directly in this body: `descriptorDirOf`, `entryOf`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Assignment or increment targets: `fd`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `c0b4904148627c4e16f57b34206cee02e72f01b73a3eeca6ff234c57f5953c3f`.

### state-worker:586

Calls written directly in this body: `descriptorDirOf`, `entryOf`, `findSystemErrno`, `removeEntryTreeSync`, `unlinkIgnoringMissing`.

Assignment or increment targets: `fd`.

Explicit throw targets: `error`.

SHA-256 of the source span: `0c22f83d881415c9ff95793c5ba5295dc8afb4770c5f97a02ec0694a5dffc612`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
