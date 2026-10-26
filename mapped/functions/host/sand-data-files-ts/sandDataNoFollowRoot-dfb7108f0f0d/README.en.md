# `sandDataNoFollowRoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454035-454037](../../../../../reference/runtime/host-main.cjs#L454035-L454037) | `FunctionDeclaration` | no | `path33` |
| [evaluation:627635-627637](../../../../../reference/runtime/sand-eval-runner.cjs#L627635-L627637) | `FunctionDeclaration` | no | `path33` |
| [state-worker:636-638](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L636-L638) | `FunctionDeclaration` | no | `path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454035-454037](../../../../../reference/runtime/host-main.cjs#L454035-L454037) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627635-627637](../../../../../reference/runtime/sand-eval-runner.cjs#L627635-L627637) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:636-638](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L636-L638) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454035

Calls written directly in this body: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 of the source span: `d6eb86670b650973c5b0c764258e6d5906e5df0313d62a7902c95b91360f694d`.

### evaluation:627635

Calls written directly in this body: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 of the source span: `2fecda2057e7569eae4b6ac174074735dbea8af32d7de47a6a212bf9027cd0f6`.

### state-worker:636

Calls written directly in this body: `hostNoFollowRoot`, `isSandDataPath`, `sandDataAnchor`.

SHA-256 of the source span: `8731c56a631bc1e8c6ec6d9946308e5ce225ea833af23b7dbd7f410fd9f4c12f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
