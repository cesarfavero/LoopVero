# `resolveProjectCadenceKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640944-640950](../../../../../../reference/runtime/host-main.cjs#L640944-L640950) | `FunctionDeclaration` | no | `args` |
| [evaluation:431557-431563](../../../../../../reference/runtime/sand-eval-runner.cjs#L431557-L431563) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640944-640950](../../../../../../reference/runtime/host-main.cjs#L640944-L640950) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431557-431563](../../../../../../reference/runtime/sand-eval-runner.cjs#L431557-L431563) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:640944

Calls written directly in this body: `sanitizeProjectReminderCadenceInterval`.

SHA-256 of the source span: `4f11ccd1b74bfaa1a3187359da9340ccdd54e212067ec87b287abc13eb4fb8ba`.

### evaluation:431557

Calls written directly in this body: `sanitizeProjectReminderCadenceInterval`.

SHA-256 of the source span: `4f11ccd1b74bfaa1a3187359da9340ccdd54e212067ec87b287abc13eb4fb8ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
