# `escapeProjectName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640964-640967](../../../../../../reference/runtime/host-main.cjs#L640964-L640967) | `FunctionDeclaration` | no | `projectName` |
| [evaluation:431577-431580](../../../../../../reference/runtime/sand-eval-runner.cjs#L431577-L431580) | `FunctionDeclaration` | no | `projectName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640964-640967](../../../../../../reference/runtime/host-main.cjs#L640964-L640967) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431577-431580](../../../../../../reference/runtime/sand-eval-runner.cjs#L431577-L431580) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640964

Calls written directly in this body: `escapeForPrompt`, `normalizeProjectName`.

SHA-256 of the source span: `5256a8f28aa7a19a8b80ee58475289abcd8ca8cd8ce1ceedc974a1d9907e770f`.

### evaluation:431577

Calls written directly in this body: `escapeForPrompt`, `normalizeProjectName`.

SHA-256 of the source span: `5256a8f28aa7a19a8b80ee58475289abcd8ca8cd8ce1ceedc974a1d9907e770f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
