# `buildSandEvalConversationHistory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/conversation-history.ts` · [Module README](../../../../../modules/core/evals/conversation-history-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628866-628932](../../../../../../reference/runtime/sand-eval-runner.cjs#L628866-L628932) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628866-628932](../../../../../../reference/runtime/sand-eval-runner.cjs#L628866-L628932) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:628866

Calls written directly in this body: `new ConversationHistory`, `request3.priorMessages.flatMap`.

SHA-256 of the source span: `c5fb9271913d8e6c2b6fdf361e99dc3e6c676a4605b20476182e4da1d2734173`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
