# `settleWriteFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775621-775638](../../../../../../../../reference/runtime/host-main.cjs#L775621-L775638) | `FunctionDeclaration` | yes | `port, args` |
| [evaluation:575265-575282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575265-L575282) | `FunctionDeclaration` | yes | `port, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775621-775638](../../../../../../../../reference/runtime/host-main.cjs#L775621-L775638) | 7 | 0 | 3 | 6 | 0 | 0 |
| [evaluation:575265-575282](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575265-L575282) | 7 | 0 | 3 | 6 | 0 | 0 |

### host:775621

Calls written directly in this body: `port.read`, `port.write`.

SHA-256 of the source span: `153fa63ae22eb6c56d17bbe008a326c7a841ebd52faa954b979f81f0e150986d`.

### evaluation:575265

Calls written directly in this body: `port.read`, `port.write`.

SHA-256 of the source span: `153fa63ae22eb6c56d17bbe008a326c7a841ebd52faa954b979f81f0e150986d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
