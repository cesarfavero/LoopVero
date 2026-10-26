# `createTurnSubagentLaunch/dispatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-launch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587727-587732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587727-L587732) | `ArrowFunctionExpression` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587727-587732](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587727-L587732) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:587727 uses an implicit arrow-function return.

### evaluation:587727

Calls written directly in this body: `host.subagents.dispatchBackgroundSubagent`.

SHA-256 of the source span: `6d1bab1bff1c8ed54a7b9e013dde7635fe43cd8a838ec3c3b0f4801ff6d31f2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
