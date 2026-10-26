# `cloudStoreMappingLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641241-641258](../../../../../../reference/runtime/host-main.cjs#L641241-L641258) | `FunctionDeclaration` | no | `storeDir` |
| [evaluation:431854-431871](../../../../../../reference/runtime/sand-eval-runner.cjs#L431854-L431871) | `FunctionDeclaration` | no | `storeDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641241-641258](../../../../../../reference/runtime/host-main.cjs#L641241-L641258) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431854-431871](../../../../../../reference/runtime/sand-eval-runner.cjs#L431854-L431871) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:641241

Calls written directly in this body: `derivedLocalPrefix.includes`, `isSafeStorePathForPrompt`, `matchAgentStorePathForDisplay`, `normalized.startsWith`, `storeDir.replace`.

SHA-256 of the source span: `4dbd67bd3af4a7e784680c0194e4b80a027c83a02bd8c54865dd2a9f49e27b62`.

### evaluation:431854

Calls written directly in this body: `derivedLocalPrefix.includes`, `isSafeStorePathForPrompt`, `matchAgentStorePathForDisplay`, `normalized.startsWith`, `storeDir.replace`.

SHA-256 of the source span: `4dbd67bd3af4a7e784680c0194e4b80a027c83a02bd8c54865dd2a9f49e27b62`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
