# `createTurnSubagentLaunch/registerReviewer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-launch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587747-587780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587747-L587780) | `ArrowFunctionExpression` | no | `stateHandler, resourceAccessor` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587747-587780](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587747-L587780) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587747

Calls written directly in this body: `hostAdapter.setLaunchReviewer`.

SHA-256 of the source span: `78169c032a30393602533a77d011eb327651dd027f05f405729a7fe91287a3cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
