# `RevivingBackgroundWorkRegistry.forTurn/abortWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490436-490436](../../../../../../reference/runtime/sand-eval-runner.cjs#L490436-L490436) | `ArrowFunctionExpression` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490436-490436](../../../../../../reference/runtime/sand-eval-runner.cjs#L490436-L490436) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:490436 uses an implicit arrow-function return.

### evaluation:490436

Calls written directly in this body: `inner.abortWork`.

SHA-256 of the source span: `43fe1a80ae23e789004e84a36b09049ce733770a6f802c1e0691730ae40ccc43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
