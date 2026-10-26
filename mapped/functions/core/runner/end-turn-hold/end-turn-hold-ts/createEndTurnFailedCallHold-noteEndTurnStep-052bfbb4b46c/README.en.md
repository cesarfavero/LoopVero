# `createEndTurnFailedCallHold/noteEndTurnStep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/end-turn-hold/end-turn-hold.ts` · [Module README](../../../../../../modules/core/runner/end-turn-hold/end-turn-hold-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590545-590557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590545-L590557) | `FunctionExpression` | no | `step, toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590545-590557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L590545-L590557) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590545

Calls written directly in this body: `step.remindOnSettle`.

Assignment or increment targets: `endTurnStep`.

SHA-256 of the source span: `79da6caf32fb3e211477818f5d3df1c8cfc04c617b8a3e559ed6795c0612b156`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
