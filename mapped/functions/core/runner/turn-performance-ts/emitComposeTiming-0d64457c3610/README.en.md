# `emitComposeTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-performance.ts` · [Module README](../../../../../modules/core/runner/turn-performance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:547198-547215](../../../../../../reference/runtime/sand-eval-runner.cjs#L547198-L547215) | `FunctionDeclaration` | no | `ctx, observation, tags` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547198-547215](../../../../../../reference/runtime/sand-eval-runner.cjs#L547198-L547215) | 1 | 1 | 0 | 0 | 0 | 0 |

### evaluation:547198

Calls written directly in this body: `histogram.histogram`, `turnSendWithoutComposeSignal.increment`.

SHA-256 of the source span: `a7c2522d2c2872c047f480c1e5c0b11670b0e15b9bf79c6da26b8537990c28f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
