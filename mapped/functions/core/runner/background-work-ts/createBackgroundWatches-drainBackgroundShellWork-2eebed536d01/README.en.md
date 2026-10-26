# `createBackgroundWatches/drainBackgroundShellWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490689-490699](../../../../../../reference/runtime/sand-eval-runner.cjs#L490689-L490699) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490689-490699](../../../../../../reference/runtime/sand-eval-runner.cjs#L490689-L490699) | 0 | 1 | 1 | 0 | 0 | 0 |

### evaluation:490689

Calls written directly in this body: `hasRunningBackgroundShellWork`, `new Promise`.

SHA-256 of the source span: `4c91d95119a137aef0d48c4aeee4f7bc9d7ed556fb101cc8ae39add1485f1c32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
