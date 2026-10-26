# `createSandSubagentLaunchPrefetch/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-launch-prefetch.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:556431-556439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556431-L556439) | `FunctionExpression` | no | `ctx, toolCallId, stateHandler` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556431-556439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556431-L556439) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:556431

Calls written directly in this body: `ctx.withDetached`, `prefetchOutlivingTheArgumentStream`, `startedToolCalls.add`, `startedToolCalls.has`.

SHA-256 of the source span: `16bb020bf3460e32d97e7f90e315fa74d2c24eae9acbe85b34d7b53ca17dbf4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
