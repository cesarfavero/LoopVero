# `reminderFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585694-585705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585694-L585705) | `FunctionDeclaration` | no | `deps, args, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585694-585705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585694-L585705) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:585694

Calls written directly in this body: `deps.loadableSkills`, `deps.messages`, `deps.skills`, `guideSkill`, `hasOpenedGuide`, `installedServerGuide`, `pluginGuideReminder`.

SHA-256 of the source span: `3e811c08d965dc12a2e99b1228af485cd9a6430eebcf8db4b6983ff256c1131e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
