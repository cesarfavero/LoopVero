# `createRunUpdateObservers/noteReactionApplied`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/run-update-observers.ts` · [Module README](../../../../../modules/core/runner/run-update-observers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:589753-589757](../../../../../../reference/runtime/sand-eval-runner.cjs#L589753-L589757) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:589753-589757](../../../../../../reference/runtime/sand-eval-runner.cjs#L589753-L589757) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:589753

Calls written directly in this body: `run.collectors.collectReaction`, `run.onReactionApplied`.

Assignment or increment targets: `reactionApplied`.

SHA-256 of the source span: `f40b3de368d733cf4b5c414e26893a64b1cfa4bf69d69d5c5e8873b848812b0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
