# `appendUserMessageReminders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:532416-532423](../../../../../../reference/runtime/sand-eval-runner.cjs#L532416-L532423) | `FunctionDeclaration` | no | `text3, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532416-532423](../../../../../../reference/runtime/sand-eval-runner.cjs#L532416-L532423) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:532416

Calls written directly in this body: `systemReminderBlock`, `userMessageReminders`.

SHA-256 of the source span: `4fd2fd7fe6546170ed4cfb52027220fad1a0b3c8b16b0dc2bfa44a68b1373d25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
