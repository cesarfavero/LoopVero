# `_SandEvalContinuationRuntime.currentScenarioTime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/continuation.ts` · [Module README](../../../../modules/evaluation/continuation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628790-628792](../../../../../reference/runtime/sand-eval-runner.cjs#L628790-L628792) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628790-628792](../../../../../reference/runtime/sand-eval-runner.cjs#L628790-L628792) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628790

Calls written directly in this body: `.toISOString`, `new Date`.

SHA-256 of the source span: `9d40ca2e1f16b4c4a2d4a4da25ca11d3fe54302f31399f66462e34c9fd642ee3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
