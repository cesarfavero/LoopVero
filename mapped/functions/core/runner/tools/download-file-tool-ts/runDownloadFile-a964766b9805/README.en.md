# `runDownloadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773868-773917](../../../../../../../reference/runtime/host-main.cjs#L773868-L773917) | `FunctionDeclaration` | yes | `args, deps` |
| [evaluation:573089-573138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573089-L573138) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773868-773917](../../../../../../../reference/runtime/host-main.cjs#L773868-L773917) | 9 | 0 | 4 | 5 | 1 | 1 |
| [evaluation:573089-573138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573089-L573138) | 9 | 0 | 4 | 5 | 1 | 1 |

### host:773868

Calls written directly in this body: `JSON.stringify`, `deps.getAgentId`, `deps.listConnections`, `deps.prepareDownload`, `deps.reviewDownload`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeDownloadFileOutcome`, `failedFileTransferResult`, `invariant`, `normalizeDestinationPath`, `normalizeSource`, `prepared.download`, `record3`, `resolveConnectorConnectionName`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `11ac998fa0a47a5d62f1ed7feaea81000628a978542761067d841349dde221b3`.

### evaluation:573089

Calls written directly in this body: `JSON.stringify`, `deps.getAgentId`, `deps.listConnections`, `deps.prepareDownload`, `deps.reviewDownload`, `describeAmbiguousConnectorConnection`, `describeConnectorConnections`, `describeDownloadFileOutcome`, `failedFileTransferResult`, `invariant`, `normalizeDestinationPath`, `normalizeSource`, `prepared.download`, `record4`, `resolveConnectorConnectionName`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `630a21ce170ea0a60aa436fea786e9c1ae0b3db2fc03938b7ac4e431ea0dbe4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
