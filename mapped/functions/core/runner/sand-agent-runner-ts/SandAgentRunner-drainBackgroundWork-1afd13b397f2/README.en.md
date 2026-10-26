# `_SandAgentRunner.drainBackgroundWork`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593848-593854](../../../../../../reference/runtime/sand-eval-runner.cjs#L593848-L593854) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593848-593854](../../../../../../reference/runtime/sand-eval-runner.cjs#L593848-L593854) | 0 | 0 | 1 | 0 | 0 | 0 |

### evaluation:593848

Calls written directly in this body: `Promise.all`, `this.backgroundWatches.drainBackgroundShellWork`, `this.backgroundWatches.drainCloudAgentWatches`, `this.subagents.drainBackgroundSubagents`.

SHA-256 of the source span: `f93d35a253e3060700d5f8d8745944746e71991689e2578aed927157136abc2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
