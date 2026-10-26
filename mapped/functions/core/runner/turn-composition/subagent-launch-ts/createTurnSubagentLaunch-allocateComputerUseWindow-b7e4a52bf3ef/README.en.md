# `createTurnSubagentLaunch/allocateComputerUseWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/turn-composition/subagent-launch.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/subagent-launch-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587735-587735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587735-L587735) | `ArrowFunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587735-587735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587735-L587735) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:587735 uses an implicit arrow-function return.

### evaluation:587735

Calls written directly in this body: `host.computerUse.allocateWindow`.

SHA-256 of the source span: `9b1487e718271bbbb2c6e57687c2eb15fdd817f828f0725877b2e0c791d85cf8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
