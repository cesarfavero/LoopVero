# `LocalExecSandBox.downloadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627092-627108](../../../../../../reference/runtime/sand-eval-runner.cjs#L627092-L627108) | `method` | yes | `_ctx, _agentId, boxPath, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627092-627108](../../../../../../reference/runtime/sand-eval-runner.cjs#L627092-L627108) | 2 | 0 | 3 | 1 | 1 | 0 |

### evaluation:627092

Calls written directly in this body: `assertPathOutsideProtectedRoots`, `new BoxFileTooLargeError`, `new Uint8Array`, `resolveProjectDir`, `this.resolveBoxPath`.

Explicit throw targets: `BoxFileTooLargeError`.

SHA-256 of the source span: `6427fb2e263938f4a153041bd5d3f3e124d39235560d40785ffbb728c547f4e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
