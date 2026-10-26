# `turnMcpReviewOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/turn-tool-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/turn-tool-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569354-569367](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569354-L569367) | `FunctionDeclaration` | no | `host, turn, props, extractConversationContext` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569354-569367](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569354-L569367) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:569354

Calls written directly in this body: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 of the source span: `527e12b082e328665635870b6706800f7fcafa0c5062a3c23728bb233981e1e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
