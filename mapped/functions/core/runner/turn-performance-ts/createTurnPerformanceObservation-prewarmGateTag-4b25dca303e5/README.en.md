# `createTurnPerformanceObservation/prewarmGateTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547328-547334](../../../../../../reference/runtime/sand-eval-runner.cjs#L547328-L547334) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547328-547334](../../../../../../reference/runtime/sand-eval-runner.cjs#L547328-L547334) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547328

Calls written directly in this body: `prewarmGate`.

Assignment or increment targets: `prewarmGateLabel`.

SHA-256 of the source span: `36e9a7e7af54425e3e520164422eb5011ed445f6cdcac535ca1c26c85ea83262`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
