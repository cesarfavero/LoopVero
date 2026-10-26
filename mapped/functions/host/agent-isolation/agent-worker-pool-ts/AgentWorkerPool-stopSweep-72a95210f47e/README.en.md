# `AgentWorkerPool.stopSweep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715502-715506](../../../../../../reference/runtime/host-main.cjs#L715502-L715506) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715502-715506](../../../../../../reference/runtime/host-main.cjs#L715502-L715506) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:715502

Calls written directly in this body: `clearInterval`.

Assignment or increment targets: `this.sweepTimer`.

SHA-256 of the source span: `b8ba4e5ddc7f3ba201e587ece799eb700d199c33d0ec62dc26da373823122b68`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
