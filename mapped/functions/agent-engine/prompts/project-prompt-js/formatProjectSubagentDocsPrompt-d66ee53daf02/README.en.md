# `formatProjectSubagentDocsPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641292-641312](../../../../../../reference/runtime/host-main.cjs#L641292-L641312) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431905-431925](../../../../../../reference/runtime/sand-eval-runner.cjs#L431905-L431925) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641292-641312](../../../../../../reference/runtime/host-main.cjs#L641292-L641312) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431905-431925](../../../../../../reference/runtime/sand-eval-runner.cjs#L431905-L431925) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641292

Calls written directly in this body: `cloudStoreMappingLine`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`.

SHA-256 of the source span: `b16771ae0087d914d9eb0c79c999ea10ca3a2af15b66913990f82d0fc0dd6fa6`.

### evaluation:431905

Calls written directly in this body: `cloudStoreMappingLine`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`.

SHA-256 of the source span: `b16771ae0087d914d9eb0c79c999ea10ca3a2af15b66913990f82d0fc0dd6fa6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
