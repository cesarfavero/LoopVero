# `_SandAgentRunner.constructor/trackSummaryLifecycle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:592832-592835](../../../../../../reference/runtime/sand-eval-runner.cjs#L592832-L592835) | `ArrowFunctionExpression` | no | `ctx, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:592832-592835](../../../../../../reference/runtime/sand-eval-runner.cjs#L592832-L592835) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:592832

Calls written directly in this body: `eventTracker.trackSummaryLifecycle`, `this.summaryLifecycle.note`.

SHA-256 of the source span: `12cd2112c1601ec8e439de4bfbb3621928cc19069489e9c183c2d729d7f37192`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
