# `opensGuide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/reminders/plugin-guide-reminder.ts` · [Module README](../../../../../../modules/core/runner/reminders/plugin-guide-reminder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585661-585673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585661-L585673) | `FunctionDeclaration` | no | `call, guide, catalog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585661-585673](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585661-L585673) | 4 | 0 | 0 | 5 | 0 | 0 |

### evaluation:585661

Calls written directly in this body: `isGuidePath`, `resolveSkillToolRequest`, `stringArg4`.

SHA-256 of the source span: `11c93a7b7d449f9946847699033af9ce1f975056e113ec6592c5f16efaa69506`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
