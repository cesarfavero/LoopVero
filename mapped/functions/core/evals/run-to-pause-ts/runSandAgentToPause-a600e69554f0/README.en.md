# `runSandAgentToPause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/run-to-pause.ts` · [Module README](../../../../../modules/core/evals/run-to-pause-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627131-627163](../../../../../../reference/runtime/sand-eval-runner.cjs#L627131-L627163) | `FunctionDeclaration` | yes | `runner, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627131-627163](../../../../../../reference/runtime/sand-eval-runner.cjs#L627131-L627163) | 3 | 1 | 3 | 2 | 0 | 0 |

### evaluation:627131

Calls written directly in this body: `buildSubagentRevival`, `options2.backgroundWaitLimit`, `options2.revivalRunOptions`, `owesSubagentRevivalReply`, `pendingCompletions.splice`, `revivalBatchOf`, `revivalRunLength`, `runner.drainBackgroundSubagents`, `runner.run`, `runner.setBackgroundSubagentHandler`, `untilDrainedOrStopped`, `waitLimit.dispose`.

Assignment or increment targets: `result`, `revivalIndex`.

SHA-256 of the source span: `ca035e3dd8a3917b8b675d4737893c504cc1807291be366bee66cf411dc4027c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
