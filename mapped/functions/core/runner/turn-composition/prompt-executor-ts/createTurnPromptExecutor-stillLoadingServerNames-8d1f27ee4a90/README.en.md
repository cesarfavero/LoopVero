# `createTurnPromptExecutor/stillLoadingServerNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/turn-composition/prompt-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/prompt-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587369-587372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587369-L587372) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587369-587372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587369-L587372) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587369

Calls written directly in this body: `.filter`, `.map`, `new Set`, `turnMcp.stillLoadingServerIdentifiers`, `turnToolHost.mcpConnectedServerNamesForTurn`.

SHA-256 of the source span: `d0a5283b53c03783e87112e53854085c74a43ebfd943604fd3e9b2244749a9ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
