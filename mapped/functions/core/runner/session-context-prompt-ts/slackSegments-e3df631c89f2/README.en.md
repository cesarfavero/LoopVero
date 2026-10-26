# `slackSegments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/session-context-prompt.ts` · [Module README](../../../../../modules/core/runner/session-context-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:538305-538310](../../../../../../reference/runtime/sand-eval-runner.cjs#L538305-L538310) | `FunctionDeclaration` | no | `sessionId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538305-538310](../../../../../../reference/runtime/sand-eval-runner.cjs#L538305-L538310) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:538305

Calls written directly in this body: `rest.join`, `sessionId.split`.

SHA-256 of the source span: `a700555fcd9b7297f5bdabe7086b89e36fd275a55c409ff42a31f302ec055ade`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
