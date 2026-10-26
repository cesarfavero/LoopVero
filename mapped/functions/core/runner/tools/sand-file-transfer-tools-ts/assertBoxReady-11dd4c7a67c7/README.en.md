# `assertBoxReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777632-777636](../../../../../../../reference/runtime/host-main.cjs#L777632-L777636) | `FunctionDeclaration` | no | `controller` |
| [evaluation:577327-577331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577327-L577331) | `FunctionDeclaration` | no | `controller` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777632-777636](../../../../../../../reference/runtime/host-main.cjs#L777632-L777636) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:577327-577331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577327-L577331) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:777632

Calls written directly in this body: `controller.isBoxPreparing`, `new BoxTransferError`.

Explicit throw targets: `BoxTransferError`.

SHA-256 of the source span: `60503ecc06858660f78deb0abc99fa833ca13d68225f26e00bb7a52e2b447124`.

### evaluation:577327

Calls written directly in this body: `controller.isBoxPreparing`, `new BoxTransferError`.

Explicit throw targets: `BoxTransferError`.

SHA-256 of the source span: `60503ecc06858660f78deb0abc99fa833ca13d68225f26e00bb7a52e2b447124`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
