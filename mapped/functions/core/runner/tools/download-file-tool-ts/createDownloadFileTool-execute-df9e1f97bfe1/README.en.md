# `createDownloadFileTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773929-773937](../../../../../../../reference/runtime/host-main.cjs#L773929-L773937) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:573150-573158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573150-L573158) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773929-773937](../../../../../../../reference/runtime/host-main.cjs#L773929-L773937) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:773929 uses an implicit arrow-function return.
| [evaluation:573150-573158](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573150-L573158) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:573150 uses an implicit arrow-function return.

### host:773929

Calls written directly in this body: `bindFileTransferAudit`, `runDownloadFile`.

SHA-256 of the source span: `3d0ece35639c3a19a0408a36ee456ebb884d937eda138b19c74851459fe01000`.

### evaluation:573150

Calls written directly in this body: `bindFileTransferAudit`, `runDownloadFile`.

SHA-256 of the source span: `3d0ece35639c3a19a0408a36ee456ebb884d937eda138b19c74851459fe01000`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
