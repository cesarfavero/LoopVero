# `createUploadFileTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774783-774805](../../../../../../../reference/runtime/host-main.cjs#L774783-L774805) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:574386-574408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574386-L574408) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774783-774805](../../../../../../../reference/runtime/host-main.cjs#L774783-L774805) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574386-574408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574386-L574408) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:774783

Calls written directly in this body: `bindFileTransferAudit`, `isBotAuthoredSource`, `runUploadFile`.

SHA-256 of the source span: `585f634b417f0b5e786c6e2223201174bb174fc24ff958aa4a0439045175aeca`.

### evaluation:574386

Calls written directly in this body: `bindFileTransferAudit`, `isBotAuthoredSource`, `runUploadFile`.

SHA-256 of the source span: `585f634b417f0b5e786c6e2223201174bb174fc24ff958aa4a0439045175aeca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
