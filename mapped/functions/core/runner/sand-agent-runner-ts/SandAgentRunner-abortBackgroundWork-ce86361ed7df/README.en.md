# `_SandAgentRunner.abortBackgroundWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593855-593860](../../../../../../reference/runtime/sand-eval-runner.cjs#L593855-L593860) | `method` | yes | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593855-593860](../../../../../../reference/runtime/sand-eval-runner.cjs#L593855-L593860) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:593855

Calls written directly in this body: `this.backgroundWatches.abortBackgroundShellWork`, `this.backgroundWatches.cancelCloudAgentWatches`, `this.interruptAll`, `this.subagents.drainBackgroundSubagents`.

SHA-256 of the source span: `e6bbcd706f0859ac9310b60a8c882b543e32c5441d30be6f5e7f05e1c64e4bd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
