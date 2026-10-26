# `cloudAgentWorkerNameLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-machine-target.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-machine-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510046-510048](../../../../../../reference/runtime/host-main.cjs#L510046-L510048) | `FunctionDeclaration` | no | `worker` |
| [evaluation:567176-567178](../../../../../../reference/runtime/sand-eval-runner.cjs#L567176-L567178) | `FunctionDeclaration` | no | `worker` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510046-510048](../../../../../../reference/runtime/host-main.cjs#L510046-L510048) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567176-567178](../../../../../../reference/runtime/sand-eval-runner.cjs#L567176-L567178) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:510046

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `233d8a118ded9296eecbfae4f77c6c5eefddc42ebf53aa1b4c9c9a018c9904c1`.

### evaluation:567176

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `233d8a118ded9296eecbfae4f77c6c5eefddc42ebf53aa1b4c9c9a018c9904c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
