# `createTurnAgentComposition/buildAgentForRun/resolveServerHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588159-588159](../../../../../../reference/runtime/sand-eval-runner.cjs#L588159-L588159) | `ArrowFunctionExpression` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588159-588159](../../../../../../reference/runtime/sand-eval-runner.cjs#L588159-L588159) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588159 uses an implicit arrow-function return.

### evaluation:588159

Calls written directly in this body: `turnToolHost.mcp.resolveServerHost`.

SHA-256 of the source span: `517398b34193bb9b19f8578e71f9eb2e18b40b7f650317b9f7527017a561288b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
