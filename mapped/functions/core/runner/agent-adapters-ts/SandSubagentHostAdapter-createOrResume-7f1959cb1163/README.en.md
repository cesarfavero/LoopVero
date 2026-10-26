# `SandSubagentHostAdapter.createOrResume`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/agent-adapters.ts` · [Module README](../../../../../modules/core/runner/agent-adapters-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582979-583016](../../../../../../reference/runtime/sand-eval-runner.cjs#L582979-L583016) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582979-583016](../../../../../../reference/runtime/sand-eval-runner.cjs#L582979-L583016) | 9 | 0 | 1 | 5 | 3 | 1 |

### evaluation:582979

Calls written directly in this body: `crypto.randomUUID`, `isComputerUseSubagentType`, `new SandSubagentDispatchError`, `this.createRunner`, `this.detached.mintSubagentId`, `this.dispatcher.allocateComputerUseWindow`, `this.dispatcher.freeComputerUseWindow`, `this.dispatcher.isRunning`, `this.sessions.has`, `this.sessions.set`.

Explicit throw targets: `SandSubagentDispatchError`, `error63`.

SHA-256 of the source span: `a667e571f276e64bee0a3166bee9d60bdbf21fc0bedeeea44d8c5e60a7b69ad8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
