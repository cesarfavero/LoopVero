# `build/show`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769447-769471](../../../../../../../../reference/runtime/host-main.cjs#L769447-L769471) | `ArrowFunctionExpression` | yes | `{ toolCallId, form }` |
| [evaluation:565094-565118](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565094-L565118) | `ArrowFunctionExpression` | yes | `{ toolCallId, form }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769447-769471](../../../../../../../../reference/runtime/host-main.cjs#L769447-L769471) | 4 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:565094-565118](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565094-L565118) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:769447

Calls written directly in this body: `Date.now`, `buildUserFormUnsupportedTurnResult`, `host.emitUpdate`, `host.getConversationId`, `shownUserFormOf`, `toolHandoff.stopOtherTools`, `turn.pauseThisRun`, `userForm.requestForm`.

SHA-256 of the source span: `a0568ba4bdea446ca62d5231fc9420f542b8f160034e96f565eca5e1dfb3e110`.

### evaluation:565094

Calls written directly in this body: `Date.now`, `buildUserFormUnsupportedTurnResult`, `host.emitUpdate`, `host.getConversationId`, `shownUserFormOf`, `toolHandoff.stopOtherTools`, `turn.pauseThisRun`, `userForm.requestForm`.

SHA-256 of the source span: `a0568ba4bdea446ca62d5231fc9420f542b8f160034e96f565eca5e1dfb3e110`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
