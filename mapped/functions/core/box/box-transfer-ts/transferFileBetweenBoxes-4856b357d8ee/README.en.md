# `transferFileBetweenBoxes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476478-476516](../../../../../../reference/runtime/host-main.cjs#L476478-L476516) | `FunctionDeclaration` | yes | `ctx, args` |
| [evaluation:515616-515654](../../../../../../reference/runtime/sand-eval-runner.cjs#L515616-L515654) | `FunctionDeclaration` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476478-476516](../../../../../../reference/runtime/host-main.cjs#L476478-L476516) | 4 | 0 | 2 | 1 | 6 | 2 |
| [evaluation:515616-515654](../../../../../../reference/runtime/sand-eval-runner.cjs#L515616-L515654) | 4 | 0 | 2 | 1 | 6 | 2 |

### host:476478

Calls written directly in this body: `dest.box.uploadFile`, `errorMessage`, `isBoxFileMissingError`, `new BoxTransferError`, `source.box.downloadFile`.

Assignment or increment targets: `data2`.

Explicit throw targets: `BoxTransferError`, `error64`.

SHA-256 of the source span: `869b523d322e284838ad34bf92ce317015299cbfac51319ad9cb93ea7f763f8a`.

### evaluation:515616

Calls written directly in this body: `dest.box.uploadFile`, `errorMessage2`, `isBoxFileMissingError`, `new BoxTransferError`, `source.box.downloadFile`.

Assignment or increment targets: `data2`.

Explicit throw targets: `BoxTransferError`, `error63`.

SHA-256 of the source span: `667a3c83f2ab024cfd9c617a4863cf28eaf7ddc311134fea72a96ad5d8a1d13e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
