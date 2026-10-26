# `createTurnPromptExecutor/delegationWording`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/turn-composition/prompt-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587386-587386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587386-L587386) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587386-587386](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587386-L587386) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:587386 uses an implicit arrow-function return.

### evaluation:587386

Calls written directly in this body: `turnToolHost.gates.sendToUserReminderDelegation`.

SHA-256 of the source span: `b967017bb6b12a41661cec0f4e4592c5337a8ec5dde0a28ed1416144fea8d626`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
