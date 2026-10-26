# `createTurnSubagentLaunch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-launch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587704-587782](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587704-L587782) | `FunctionDeclaration` | no | `host, turnToolHost, turnScope, launch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587704-587782](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587704-L587782) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587704

Calls written directly in this body: `createSandAutoReviewClassifierContextExtractor`, `createSandSubagentLaunchPrefetch`, `new SandSubagentHostAdapter`, `sandAutoReviewClassifierContextOptions`.

SHA-256 of the source span: `1afa530c5d9c4ce8a32092e891123f5ba978e2f848b87acde75c95c08ff5e10b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
