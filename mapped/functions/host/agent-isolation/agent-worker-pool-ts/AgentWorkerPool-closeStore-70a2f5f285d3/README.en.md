# `AgentWorkerPool.closeStore`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715444-715450](../../../../../../reference/runtime/host-main.cjs#L715444-L715450) | `method` | yes | `blobDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715444-715450](../../../../../../reference/runtime/host-main.cjs#L715444-L715450) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:715444

Calls written directly in this body: `connection.close`, `this.connections.delete`, `this.connections.get`, `this.stopSweep`.

SHA-256 of the source span: `2ab731be2b39d39f0bf89aaaa70c2dcdf103fa2358e2eeab7958cf3ee789e7a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
