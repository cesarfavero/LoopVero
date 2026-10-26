# `describeCloudAgentWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-machine-target.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-machine-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510068-510079](../../../../../../reference/runtime/host-main.cjs#L510068-L510079) | `FunctionDeclaration` | no | `worker` |
| [evaluation:567180-567191](../../../../../../reference/runtime/sand-eval-runner.cjs#L567180-L567191) | `FunctionDeclaration` | no | `worker` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510068-510079](../../../../../../reference/runtime/host-main.cjs#L510068-L510079) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:567180-567191](../../../../../../reference/runtime/sand-eval-runner.cjs#L567180-L567191) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:510068

Calls written directly in this body: `.filter`, `cloudAgentWorkerNameLabel`, `parts.join`, `worker.repos.join`.

SHA-256 of the source span: `999d1a256fdd4829ed7b1119388988e5b9da6140821f9b5c028a02db610179f2`.

### evaluation:567180

Calls written directly in this body: `.filter`, `cloudAgentWorkerNameLabel`, `parts.join`, `worker.repos.join`.

SHA-256 of the source span: `999d1a256fdd4829ed7b1119388988e5b9da6140821f9b5c028a02db610179f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
