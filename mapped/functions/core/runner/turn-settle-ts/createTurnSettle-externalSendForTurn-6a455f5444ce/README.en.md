# `createTurnSettle/externalSendForTurn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590834-590867](../../../../../../reference/runtime/sand-eval-runner.cjs#L590834-L590867) | `ArrowFunctionExpression` | no | `calls, firstPartyToolCalls, reviewedCommits, requestSource, onlyExternalSend, hostListingFailed, parentPromptMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590834-590867](../../../../../../reference/runtime/sand-eval-runner.cjs#L590834-L590867) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590834

Calls written directly in this body: `.map`, `candidateToolCallIds.filter`, `candidateToolCallIds.flatMap`, `new Set`, `parentPromptMessages.filter`, `withServerHost`, `withoutServerHost`.

SHA-256 of the source span: `d1158511c8c32a505bdfe0832e7252920e32c8834238da260f6ffa79e12d04f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
