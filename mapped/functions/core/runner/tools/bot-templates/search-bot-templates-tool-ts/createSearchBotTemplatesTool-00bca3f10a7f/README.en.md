# `createSearchBotTemplatesTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770887-770909](../../../../../../../../reference/runtime/host-main.cjs#L770887-L770909) | `FunctionDeclaration` | no | `deps = {}` |
| [evaluation:569982-570004](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569982-L570004) | `FunctionDeclaration` | no | `deps = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770887-770909](../../../../../../../../reference/runtime/host-main.cjs#L770887-L770909) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569982-570004](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569982-L570004) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770887

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `4f06ff8521a0c2360cc3c328b4a8ab8bae4b48766f2de1dd391a879cba85e76c`.

### evaluation:569982

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `4f06ff8521a0c2360cc3c328b4a8ab8bae4b48766f2de1dd391a879cba85e76c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
