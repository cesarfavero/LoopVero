# `sanitizePromptSessionUsage/getExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/conversation-state.ts` · [Module README](../../../../../modules/core/runner/conversation-state-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:529635-529659](../../../../../../reference/runtime/sand-eval-runner.cjs#L529635-L529659) | `ArrowFunctionExpression` | no | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529635-529659](../../../../../../reference/runtime/sand-eval-runner.cjs#L529635-L529659) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529635

Calls written directly in this body: `getEarlyCompaction`, `sanitizePromptExecutorUsage`, `session.getExecutor`, `session.getModelId`.

SHA-256 of the source span: `ea71621552025a3da23454f824d1ebabf7f65b267533d78da9d5388fb370f7fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
