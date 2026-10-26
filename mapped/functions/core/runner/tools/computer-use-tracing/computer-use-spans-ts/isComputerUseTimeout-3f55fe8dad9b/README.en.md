# `isComputerUseTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742961-742963](../../../../../../../../reference/runtime/host-main.cjs#L742961-L742963) | `FunctionDeclaration` | no | `error64` |
| [evaluation:515812-515814](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515812-L515814) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742961-742963](../../../../../../../../reference/runtime/host-main.cjs#L742961-L742963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515812-515814](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515812-L515814) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742961

Calls written directly in this body: `isFusedStepGuardTimeoutReason`.

SHA-256 of the source span: `4be4230ac6c420c806de1d0a9f9286faf27ec80c4d7abaf708d819be8343cdab`.

### evaluation:515812

Calls written directly in this body: `isFusedStepGuardTimeoutReason`.

SHA-256 of the source span: `ceae6899860469801f8da731aebc2c32f7eaff5459c82d3bd43e7248cbe07bae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
