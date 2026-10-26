# `createTurnAgentComposition/buildAgentForRun/keepToolResultsCompletedBeforeCancel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588266-588266](../../../../../../reference/runtime/sand-eval-runner.cjs#L588266-L588266) | `ArrowFunctionExpression` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588266-588266](../../../../../../reference/runtime/sand-eval-runner.cjs#L588266-L588266) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588266 uses an implicit arrow-function return.

### evaluation:588266

Calls written directly in this body: `linesHandedAgainNextTurn`.

SHA-256 of the source span: `f54f8da87744fe3f90aabd56b802269663c1f609d1fbc7a0cc786f021df34606`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
