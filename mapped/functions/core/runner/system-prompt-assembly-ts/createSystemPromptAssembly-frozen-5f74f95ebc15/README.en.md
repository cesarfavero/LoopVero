# `createSystemPromptAssembly/frozen`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553100-553116](../../../../../../reference/runtime/sand-eval-runner.cjs#L553100-L553116) | `FunctionDeclaration` | no | `name18, renderLive` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553100-553116](../../../../../../reference/runtime/sand-eval-runner.cjs#L553100-L553116) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:553100

Calls written directly in this body: `deps.compactionEpoch`, `deps.promptSectionSnapshots`, `isFrozenPromptSectionAbsenceUnresolved`, `pinnedSection`, `renderLive`, `resolveFrozenPromptSection`, `store.setPromptSectionSnapshot`, `withAutomationsSplit`.

SHA-256 of the source span: `2cb97c851b56b1ee4b51e96981e2512b707b5d3c2ea3d90faba2fa56bd2276ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
