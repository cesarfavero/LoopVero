# `renderAutomationClearedStatusReminder`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/prompt-sections/automations-prompt.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/automations-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528551-528561](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528551-L528561) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528551-528561](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528551-L528561) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528551

Calls written directly in this body: `.join`, `systemReminder`.

SHA-256 of the source span: `251326c3da50240f64dac3cd02d76d4620d0a45899c2db5edab5eeefc616763b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
