# `createReadEmailAttachmentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/read-email-attachment-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/read-email-attachment-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764992-765001](../../../../../../../reference/runtime/host-main.cjs#L764992-L765001) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558360-558369](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558360-L558369) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764992-765001](../../../../../../../reference/runtime/host-main.cjs#L764992-L765001) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558360-558369](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558360-L558369) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764992

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `ed6b8e2cfaa4c78f78323fb0c70598f01f2a79b1dffd37b222176f6bb672b6e8`.

### evaluation:558360

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `ed6b8e2cfaa4c78f78323fb0c70598f01f2a79b1dffd37b222176f6bb672b6e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
