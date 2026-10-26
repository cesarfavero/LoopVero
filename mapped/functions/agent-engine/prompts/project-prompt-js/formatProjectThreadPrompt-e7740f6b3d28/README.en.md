# `formatProjectThreadPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641313-641354](../../../../../../reference/runtime/host-main.cjs#L641313-L641354) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431926-431967](../../../../../../reference/runtime/sand-eval-runner.cjs#L431926-L431967) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641313-641354](../../../../../../reference/runtime/host-main.cjs#L641313-L641354) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431926-431967](../../../../../../reference/runtime/sand-eval-runner.cjs#L431926-L431967) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:641313

Calls written directly in this body: `cloudStoreMappingLine`, `escapeProjectName`, `formatProjectSubagentDocsPrompt`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`, `options2.mountedAgentStores.find`, `projectReference`, `promptOverrideOrDefault`, `threadStoreBody`.

SHA-256 of the source span: `eec0c676333f41a75f3c9213ad83f4fd794fb933d6d8872571b75b67f2f73240`.

### evaluation:431926

Calls written directly in this body: `cloudStoreMappingLine`, `escapeProjectName`, `formatProjectSubagentDocsPrompt`, `isSafeProjectSubagentId`, `isSafeStorePathForPrompt`, `options2.mountedAgentStores.find`, `projectReference`, `promptOverrideOrDefault`, `threadStoreBody`.

SHA-256 of the source span: `eec0c676333f41a75f3c9213ad83f4fd794fb933d6d8872571b75b67f2f73240`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
