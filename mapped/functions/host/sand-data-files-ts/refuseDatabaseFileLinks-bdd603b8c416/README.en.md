# `refuseDatabaseFileLinks`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453864-453872](../../../../../reference/runtime/host-main.cjs#L453864-L453872) | `FunctionDeclaration` | no | `parentFd, path33` |
| [state-worker:517-525](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L517-L525) | `FunctionDeclaration` | no | `parentFd, path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453864-453872](../../../../../reference/runtime/host-main.cjs#L453864-L453872) | 1 | 1 | 0 | 0 | 1 | 0 |
| [state-worker:517-525](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L517-L525) | 1 | 1 | 0 | 0 | 1 | 0 |

### host:453864

Calls written directly in this body: `.isSymbolicLink`, `entryOf2`, `new NoFollowRefusedError`.

Explicit throw targets: `NoFollowRefusedError`.

SHA-256 of the source span: `2d7adecf133cf7215ec007c671e4cce882e2cf993eb8d21bf9991b0f0aa693ed`.

### state-worker:517

Calls written directly in this body: `.isSymbolicLink`, `entryOf`, `new NoFollowRefusedError`.

Explicit throw targets: `NoFollowRefusedError`.

SHA-256 of the source span: `135ecf4bf2028e61a5c7759ba89c2565729ccb819817ba9a63224664e65e5acd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
