# `forksExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-roster.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-roster-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587628-587630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587628-L587630) | `FunctionDeclaration` | no | `gates, subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587628-587630](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587628-L587630) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587628

Calls written directly in this body: `gates.executorForkContext`.

SHA-256 of the source span: `ec939652a9a6c2bfadc40b608b12fe8b64d0f675617ea0f8fabf913c7ebbb144`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
