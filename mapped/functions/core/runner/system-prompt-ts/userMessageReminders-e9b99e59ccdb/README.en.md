# `userMessageReminders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532407-532412](../../../../../../reference/runtime/sand-eval-runner.cjs#L532407-L532412) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532407-532412](../../../../../../reference/runtime/sand-eval-runner.cjs#L532407-L532412) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532407

Calls written directly in this body: `userReplyReminderEnabled`.

SHA-256 of the source span: `e13c3cf0367dc634c6e3adc9d28dcf2fcb7d621f1e362b2312860c1d1516274d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
