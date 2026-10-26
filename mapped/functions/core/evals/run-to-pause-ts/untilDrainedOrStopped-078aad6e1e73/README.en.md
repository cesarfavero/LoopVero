# `untilDrainedOrStopped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/run-to-pause.ts` · [Module README](../../../../../modules/core/evals/run-to-pause-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627122-627130](../../../../../../reference/runtime/sand-eval-runner.cjs#L627122-L627130) | `FunctionDeclaration` | no | `drained, stops` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627122-627130](../../../../../../reference/runtime/sand-eval-runner.cjs#L627122-L627130) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:627122

Calls written directly in this body: `Promise.resolve`, `new Promise`, `signals.some`, `stops.filter`.

SHA-256 of the source span: `df84e9acae96cd8c5f9a715230754b8be2130c131dfa9b69cf5c58ae721e0d69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
