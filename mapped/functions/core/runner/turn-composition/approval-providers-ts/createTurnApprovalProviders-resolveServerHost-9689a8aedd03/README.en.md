# `createTurnApprovalProviders/resolveServerHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/turn-composition/approval-providers.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/approval-providers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583746-583746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583746-L583746) | `ArrowFunctionExpression` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583746-583746](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583746-L583746) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:583746 uses an implicit arrow-function return.

### evaluation:583746

Calls written directly in this body: `turnToolHost.mcp.resolveServerHost`.

SHA-256 of the source span: `517398b34193bb9b19f8578e71f9eb2e18b40b7f650317b9f7527017a561288b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
