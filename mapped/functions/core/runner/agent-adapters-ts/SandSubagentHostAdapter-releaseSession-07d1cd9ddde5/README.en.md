# `SandSubagentHostAdapter.releaseSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583184-583189](../../../../../../reference/runtime/sand-eval-runner.cjs#L583184-L583189) | `method` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583184-583189](../../../../../../reference/runtime/sand-eval-runner.cjs#L583184-L583189) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:583184

Calls written directly in this body: `this.dispatcher.freeComputerUseWindow`, `this.dispatcher.isRunning`, `this.sessions.delete`.

SHA-256 of the source span: `3da37013b68ae89b372d652eb6e3af971201750c74f32fb9816445bc662bca97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
