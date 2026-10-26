# `build/reviewAutomationWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/bot-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772138-772153](../../../../../../../../reference/runtime/host-main.cjs#L772138-L772153) | `ArrowFunctionExpression` | no | `target, toolCallId` |
| [evaluation:571371-571386](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571371-L571386) | `ArrowFunctionExpression` | no | `target, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772138-772153](../../../../../../../../reference/runtime/host-main.cjs#L772138-L772153) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:772138 uses an implicit arrow-function return.
| [evaluation:571371-571386](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571371-L571386) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:571371 uses an implicit arrow-function return.

### host:772138

Calls written directly in this body: `host.automationWriteReviewMode`, `host.getConversationId`, `reviewSandAutomationWrite`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `41ab95a696563a42d94524d6fa4a8b741e627848385287fe82241f4504ae7709`.

### evaluation:571371

Calls written directly in this body: `host.automationWriteReviewMode`, `host.getConversationId`, `reviewSandAutomationWrite`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `41ab95a696563a42d94524d6fa4a8b741e627848385287fe82241f4504ae7709`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
