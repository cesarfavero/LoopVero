# `keptModeOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454057-454059](../../../../../reference/runtime/host-main.cjs#L454057-L454059) | `FunctionDeclaration` | no | `info2` |
| [evaluation:627649-627651](../../../../../reference/runtime/sand-eval-runner.cjs#L627649-L627651) | `FunctionDeclaration` | no | `info2` |
| [state-worker:650-652](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L650-L652) | `FunctionDeclaration` | no | `info` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454057-454059](../../../../../reference/runtime/host-main.cjs#L454057-L454059) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627649-627651](../../../../../reference/runtime/sand-eval-runner.cjs#L627649-L627651) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:650-652](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L650-L652) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454057

Calls written directly in this body: `info2.isFile`, `isHostOwned`, `process.umask`.

SHA-256 of the source span: `8081d379a28e781a37ed803436dbafa1f720fa8bc46a5240ba88440dd389e42c`.

### evaluation:627649

Calls written directly in this body: `info2.isFile`, `isHostOwned`, `process.umask`.

SHA-256 of the source span: `8081d379a28e781a37ed803436dbafa1f720fa8bc46a5240ba88440dd389e42c`.

### state-worker:650

Calls written directly in this body: `info.isFile`, `isHostOwned`, `process.umask`.

SHA-256 of the source span: `8aae794ac97b43fd70cd5f8b7f5c39ba6bee362e5d9e6e6776eb2d3be6d0396c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
