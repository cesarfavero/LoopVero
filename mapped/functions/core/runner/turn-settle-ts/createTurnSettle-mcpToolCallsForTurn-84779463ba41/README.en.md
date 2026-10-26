# `createTurnSettle/mcpToolCallsForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590805-590817](../../../../../../reference/runtime/sand-eval-runner.cjs#L590805-L590817) | `ArrowFunctionExpression` | no | `messages, resolveHost, excluded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590805-590817](../../../../../../reference/runtime/sand-eval-runner.cjs#L590805-L590817) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:590805

Calls written directly in this body: `classifyMcpToolCalls`, `reportExternalSendCandidates`, `skippedToolCallIds`.

SHA-256 of the source span: `47be3d34b0835ab86a35f2e4edc586fd58d83b33d805bc2ae3e93810c7111cbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
