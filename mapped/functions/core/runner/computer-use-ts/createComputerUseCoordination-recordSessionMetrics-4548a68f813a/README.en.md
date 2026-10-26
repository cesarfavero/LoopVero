# `createComputerUseCoordination/recordSessionMetrics`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525513-525522](../../../../../../reference/runtime/sand-eval-runner.cjs#L525513-L525522) | `FunctionExpression` | no | `session` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525513-525522](../../../../../../reference/runtime/sand-eval-runner.cjs#L525513-L525522) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525513

Calls written directly in this body: `sessionAutoReview.histogram`, `sessionDuration.histogram`.

SHA-256 of the source span: `939dc6e32cd9d4a3369a3060b7928ba67c1b7053ce2330497944bf553d26add1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
