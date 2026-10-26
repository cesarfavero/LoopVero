# `isAutomationCompletionPromptMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/automation-completion-middleware.ts` · [Module README](../../../../../modules/core/runner/automation-completion-middleware-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586351-586353](../../../../../../reference/runtime/sand-eval-runner.cjs#L586351-L586353) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586351-586353](../../../../../../reference/runtime/sand-eval-runner.cjs#L586351-L586353) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:586351

Calls written directly in this body: `completionIdOf`.

SHA-256 of the source span: `2a34292cac62716bf2ada779bd58799787e71f6d89612f0d839ad2e3de9de8f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
