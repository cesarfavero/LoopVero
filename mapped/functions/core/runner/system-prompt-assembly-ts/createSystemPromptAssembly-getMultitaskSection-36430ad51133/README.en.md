# `createSystemPromptAssembly/getMultitaskSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553340-553353](../../../../../../reference/runtime/sand-eval-runner.cjs#L553340-L553353) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553340-553353](../../../../../../reference/runtime/sand-eval-runner.cjs#L553340-L553353) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:553340

Calls written directly in this body: `delegationPromptSections`, `deps.gates.taskSubagentRoster`, `executorWritesPages2`, `sandSubagentToolName`, `visualizeOffered`.

SHA-256 of the source span: `962bf41b68c466ccb9b05d23928fbad1848599ff38649d3d66871f6b8ed1f038`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
