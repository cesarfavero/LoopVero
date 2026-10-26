# `createSandAgentEventTracker/trackSmartModeClassifierCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-event-tracker.ts` · [Module README](../../../../../modules/core/runner/sand-agent-event-tracker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534934-534937](../../../../../../reference/runtime/sand-eval-runner.cjs#L534934-L534937) | `ArrowFunctionExpression` | no | `ctx, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534934-534937](../../../../../../reference/runtime/sand-eval-runner.cjs#L534934-L534937) | 1 | 0 | 0 | 0 | 0 | 0 |

### evaluation:534934

Calls written directly in this body: `options2.fallback.trackSmartModeClassifierCall`, `options2.onEnforcedAutoReview`.

SHA-256 of the source span: `01e092e1eb6dbbc9bb83d3d474922d98d831143792f0b92c0a066ebf2d9119b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
