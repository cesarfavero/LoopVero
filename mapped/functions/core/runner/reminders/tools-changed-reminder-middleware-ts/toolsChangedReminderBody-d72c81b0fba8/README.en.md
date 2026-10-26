# `toolsChangedReminderBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/reminders/tools-changed-reminder-middleware.ts` · [Module README](../../../../../../modules/core/runner/reminders/tools-changed-reminder-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586925-586942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586925-L586942) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586925-586942](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586925-L586942) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586925

Calls written directly in this body: `args.offered.join`, `args.subagentTypes.types.join`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `ccece4e08a4225b1851ca986e4235fe07bebaf07cf0e41bba9c140d6e6d49946`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
