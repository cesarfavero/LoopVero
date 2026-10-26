# `describeUploadFileOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774662-774694](../../../../../../../reference/runtime/host-main.cjs#L774662-L774694) | `FunctionDeclaration` | no | `outcome, request5` |
| [evaluation:574265-574297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574265-L574297) | `FunctionDeclaration` | no | `outcome, request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774662-774694](../../../../../../../reference/runtime/host-main.cjs#L774662-L774694) | 12 | 0 | 0 | 10 | 0 | 0 |
| [evaluation:574265-574297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574265-L574297) | 12 | 0 | 0 | 10 | 0 | 0 |

### host:774662

Calls written directly in this body: `JSON.stringify`, `formatBytes2`, `lines2.join`, `lines2.push`, `outcome.allowedRoots.join`, `outcome.available.join`.

SHA-256 of the source span: `1b8290f6994282041c25a8fee8fc72aa1966afc5980a3e0722293b5dc04478ee`.

### evaluation:574265

Calls written directly in this body: `JSON.stringify`, `formatBytes2`, `lines2.join`, `lines2.push`, `outcome.allowedRoots.join`, `outcome.available.join`.

SHA-256 of the source span: `2c395fe1192d5df5d3d88bf8ab802b0835628e3fa07675b91a86a8fc198a8f41`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
