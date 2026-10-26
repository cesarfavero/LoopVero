# `createDownloadFileTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773918-773939](../../../../../../../reference/runtime/host-main.cjs#L773918-L773939) | `FunctionDeclaration` | no | `deps` |
| [evaluation:573139-573160](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573139-L573160) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773918-773939](../../../../../../../reference/runtime/host-main.cjs#L773918-L773939) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573139-573160](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573139-L573160) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773918

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `ff4dc2dbc8d7c72906108cd9c5614cc501c08e9fa510f73274c6779a95e0e58e`.

### evaluation:573139

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `09d53dec3c19a48bdeecf60188dcea704085ec0cf1d4ae50be581619dfd409d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
