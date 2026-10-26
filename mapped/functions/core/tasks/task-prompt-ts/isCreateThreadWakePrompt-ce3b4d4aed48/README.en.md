# `isCreateThreadWakePrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/tasks/task-prompt.ts` · [Module README](../../../../../modules/core/tasks/task-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538902-538904](../../../../../../reference/runtime/sand-eval-runner.cjs#L538902-L538904) | `FunctionDeclaration` | no | `prompt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538902-538904](../../../../../../reference/runtime/sand-eval-runner.cjs#L538902-L538904) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:538902

Calls written directly in this body: `prompt.startsWith`.

SHA-256 of the source span: `9f17362679356d30bf27c45fbe7123335e66a14e8696a753313b50cc64c20c4a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
