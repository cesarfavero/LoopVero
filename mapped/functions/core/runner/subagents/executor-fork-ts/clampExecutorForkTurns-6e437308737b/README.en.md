# `clampExecutorForkTurns`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/executor-fork.ts` · [Module README](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587554-587558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587554-L587558) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587554-587558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587554-L587558) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:587554

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `f3e944d7e341a6004fad371104aeeef686546b4fd236f4365daf8536fd590101`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
