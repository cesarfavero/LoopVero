# `delegationRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-action-audit.ts` · [Module README](../../../../../modules/core/runner/sand-action-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:512274-512284](../../../../../../reference/runtime/sand-eval-runner.cjs#L512274-L512284) | `FunctionDeclaration` | no | `ctx, identity2, toolCallId, action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512274-512284](../../../../../../reference/runtime/sand-eval-runner.cjs#L512274-L512284) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:512274

Calls written directly in this body: `Date.now`, `identity2.getConversationId`, `identity2.resolveBoxId`, `turnAttributionFromContext`.

SHA-256 of the source span: `edd3144c72ad0efb388c514caa8727a04af0cdd5345716c0dd8c3b5fdc060ee9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
