# `createUploadFileTool/execute/onUploaded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/upload-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/upload-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774794-774802](../../../../../../../reference/runtime/host-main.cjs#L774794-L774802) | `ArrowFunctionExpression` | no | `uploaded` |
| [evaluation:574397-574405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574397-L574405) | `ArrowFunctionExpression` | no | `uploaded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774794-774802](../../../../../../../reference/runtime/host-main.cjs#L774794-L774802) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574397-574405](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574397-L574405) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:774794

Calls written directly in this body: `connectorServiceKey`, `deps.getAgentId`, `recordLibraryDocTouches`, `uploadedDocTouch`.

SHA-256 of the source span: `4c83fd13339a075ab69d3ff11e4befd96712d218832a1b33cb2e3c7a3123d286`.

### evaluation:574397

Calls written directly in this body: `connectorServiceKey`, `deps.getAgentId`, `recordLibraryDocTouches`, `uploadedDocTouch`.

SHA-256 of the source span: `4c83fd13339a075ab69d3ff11e4befd96712d218832a1b33cb2e3c7a3123d286`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
