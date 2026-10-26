# `auditedBoxTransfer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777595-777608](../../../../../../../reference/runtime/host-main.cjs#L777595-L777608) | `FunctionDeclaration` | yes | `ctx, controller, call, transfer` |
| [evaluation:577290-577303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577290-L577303) | `FunctionDeclaration` | yes | `ctx, controller, call, transfer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777595-777608](../../../../../../../reference/runtime/host-main.cjs#L777595-L777608) | 0 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:577290-577303](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577290-L577303) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:777595

Calls written directly in this body: `bindFileTransferAudit`, `failedFileTransferResult`, `record3`, `transferFileBetweenBoxes`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `2ff1f66c41eb05a6dd804ef4bf9241c3e9bedf5b0f47c63129825ba894d1e49e`.

### evaluation:577290

Calls written directly in this body: `bindFileTransferAudit`, `failedFileTransferResult`, `record4`, `transferFileBetweenBoxes`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `91374f74f302857083891f067fae23685192817099f0af863ec0e457f71127cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
