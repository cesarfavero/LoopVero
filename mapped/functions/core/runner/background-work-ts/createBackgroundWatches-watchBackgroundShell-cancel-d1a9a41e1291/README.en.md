# `createBackgroundWatches/watchBackgroundShell/cancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490651-490655](../../../../../../reference/runtime/sand-eval-runner.cjs#L490651-L490655) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490651-490655](../../../../../../reference/runtime/sand-eval-runner.cjs#L490651-L490655) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:490651

Calls written directly in this body: `notifyShellWorkChanged`, `shellRewatches.delete`.

Assignment or increment targets: `cancelled`.

SHA-256 of the source span: `ae8eba0e30e81ef398dd8599115009f8ff851575d14da3bd98ce5252544313d8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
