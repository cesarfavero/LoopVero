# `runUploadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774705-774770](../../../../../../../reference/runtime/host-main.cjs#L774705-L774770) | `FunctionDeclaration` | yes | `args, deps` |
| [evaluation:574308-574373](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574308-L574373) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774705-774770](../../../../../../../reference/runtime/host-main.cjs#L774705-L774770) | 11 | 0 | 4 | 5 | 1 | 2 |
| [evaluation:574308-574373](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574308-L574373) | 11 | 0 | 4 | 5 | 1 | 2 |

### host:774705

Calls written directly in this body: `JSON.stringify`, `checkFolderTargets`, `deps.getAgentId`, `deps.listConnections`, `deps.onUploaded`, `deps.reviewUpload`, `deps.stage`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeUploadFileOutcome`, `errorLogTag`, `failedFileTransferResult`, `invariant`, `normalizeDestination`, `normalizeSourcePath`, `process.stderr.write`, `record3`, `resolveConnectorConnectionName`, `staged.upload`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0c4223e96df4a8f376c8162f4c003927651e6149a8a7786c5c36470a7bd63d21`.

### evaluation:574308

Calls written directly in this body: `JSON.stringify`, `checkFolderTargets`, `deps.getAgentId`, `deps.listConnections`, `deps.onUploaded`, `deps.reviewUpload`, `deps.stage`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeUploadFileOutcome`, `errorLogTag`, `failedFileTransferResult`, `invariant`, `normalizeDestination`, `normalizeSourcePath`, `process.stderr.write`, `record4`, `resolveConnectorConnectionName`, `staged.upload`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `ac1698c135e10959f2364633e9765deaa5c14052e82b8658dce242f3d54ffafe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
