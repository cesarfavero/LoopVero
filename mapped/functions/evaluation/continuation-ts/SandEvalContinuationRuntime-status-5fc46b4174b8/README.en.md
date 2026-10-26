# `_SandEvalContinuationRuntime.status`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628785-628789](../../../../../reference/runtime/sand-eval-runner.cjs#L628785-L628789) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628785-628789](../../../../../reference/runtime/sand-eval-runner.cjs#L628785-L628789) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628785

Calls written directly in this body: `Date.parse`, `this.control.status`.

Assignment or increment targets: `this.currentScenarioMs`.

SHA-256 of the source span: `b8e606694b8a5278a792fc91c8b5136675a5d31c0ce64a61aadf1b43d0219d43`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
