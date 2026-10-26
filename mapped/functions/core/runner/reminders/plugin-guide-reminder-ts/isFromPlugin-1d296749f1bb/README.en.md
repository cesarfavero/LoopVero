# `isFromPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585644-585647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585644-L585647) | `FunctionDeclaration` | no | `skill, pluginIdentity` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585644-585647](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585644-L585647) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:585644

Calls written directly in this body: `.startsWith`, `toModelVisibleText`.

SHA-256 of the source span: `9843049d4cffbb3fcd1e57639e9331459e9890bee49c1172b08b5f44173f2df3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
