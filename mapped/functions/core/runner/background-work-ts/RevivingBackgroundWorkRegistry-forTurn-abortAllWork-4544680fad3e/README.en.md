# `RevivingBackgroundWorkRegistry.forTurn/abortAllWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490438-490438](../../../../../../reference/runtime/sand-eval-runner.cjs#L490438-L490438) | `ArrowFunctionExpression` | no | `filter3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490438-490438](../../../../../../reference/runtime/sand-eval-runner.cjs#L490438-L490438) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:490438 uses an implicit arrow-function return.

### evaluation:490438

Calls written directly in this body: `inner.abortAllWork`.

SHA-256 of the source span: `376cbaeb4960a8e2c8cb387ad3a8b127a1579c4ce973b43598bd97f0b941bf14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
