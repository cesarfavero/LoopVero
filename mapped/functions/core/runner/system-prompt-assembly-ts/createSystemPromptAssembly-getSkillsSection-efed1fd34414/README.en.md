# `createSystemPromptAssembly/getSkillsSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553248-553264](../../../../../../reference/runtime/sand-eval-runner.cjs#L553248-L553264) | `FunctionDeclaration` | no | `skillPointers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553248-553264](../../../../../../reference/runtime/sand-eval-runner.cjs#L553248-L553264) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553248

Calls written directly in this body: `.some`, `deps.skillAccess`, `deps.skillStore`, `deps.teamBot`, `renderSkillsSystemPrompt`, `skillAuthoringPointer`, `store.getLocation`, `store.list`.

SHA-256 of the source span: `28ff7c02510e42159ea0772096faf8fb23549d3a0b0600ded2bdb1c9db4cb703`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
