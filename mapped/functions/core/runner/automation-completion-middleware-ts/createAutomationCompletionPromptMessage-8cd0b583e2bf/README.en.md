# `createAutomationCompletionPromptMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/automation-completion-middleware.ts` · [Module README](../../../../../modules/core/runner/automation-completion-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586339-586350](../../../../../../reference/runtime/sand-eval-runner.cjs#L586339-L586350) | `FunctionDeclaration` | no | `completion, isRenamedSpelling` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586339-586350](../../../../../../reference/runtime/sand-eval-runner.cjs#L586339-L586350) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586339

Calls written directly in this body: `hiddenPromptMarker`, `isSandAutomationHandoffId`, `renderAutomationHandoffInboxPrompt`.

SHA-256 of the source span: `1caf18a12b7f27b2443303f727ef5d1611ce89b7d76810be52ce5d4a018c4f34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
