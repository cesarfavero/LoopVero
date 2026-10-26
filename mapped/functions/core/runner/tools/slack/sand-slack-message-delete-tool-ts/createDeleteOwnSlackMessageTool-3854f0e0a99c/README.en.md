# `createDeleteOwnSlackMessageTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/slack/sand-slack-message-delete-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/slack/sand-slack-message-delete-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768239-768254](../../../../../../../../reference/runtime/host-main.cjs#L768239-L768254) | `FunctionDeclaration` | no | `messageDelete` |
| [evaluation:563755-563770](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563755-L563770) | `FunctionDeclaration` | no | `messageDelete` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768239-768254](../../../../../../../../reference/runtime/host-main.cjs#L768239-L768254) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:563755-563770](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563755-L563770) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768239

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `7aa2d7e8cf9cb984b915fbf76af41179f1db7af8e75902bb5ff200c581d6dd16`.

### evaluation:563755

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `7aa2d7e8cf9cb984b915fbf76af41179f1db7af8e75902bb5ff200c581d6dd16`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
