# `failedFileTransferResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770398-770411](../../../../../../../reference/runtime/host-main.cjs#L770398-L770411) | `FunctionDeclaration` | no | `error64` |
| [evaluation:569169-569182](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569169-L569182) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770398-770411](../../../../../../../reference/runtime/host-main.cjs#L770398-L770411) | 5 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:569169-569182](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569169-L569182) | 5 | 1 | 0 | 4 | 0 | 0 |

### host:770398

Calls written directly in this body: `findSystemErrno`, `isLocalToolRefusal`.

Assignment or increment targets: `innermost`.

SHA-256 of the source span: `dc69bc6b631a5552281727a52267d4d554c71095590a21e99a2db291d3b52f3c`.

### evaluation:569169

Calls written directly in this body: `findSystemErrno`, `isLocalToolRefusal`.

Assignment or increment targets: `innermost`.

SHA-256 of the source span: `dee5dcb9f7ccb94e25480f21a374e59d058fea1bef1ff7334e13bcdae52cbfdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
