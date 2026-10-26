# `sandTasksPromptSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/tasks/task-prompt.ts` · [Module README](../../../../../modules/core/tasks/task-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538895-538900](../../../../../../reference/runtime/sand-eval-runner.cjs#L538895-L538900) | `FunctionDeclaration` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538895-538900](../../../../../../reference/runtime/sand-eval-runner.cjs#L538895-L538900) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538895

Calls written directly in this body: `SAND_TASKS_PROMPT_SECTION.replace`, `encodeURIComponent`.

SHA-256 of the source span: `84e0ea45c46e8a9b07da12d87fb8dc6fe1193393caa1292044b93c91d56c09fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
