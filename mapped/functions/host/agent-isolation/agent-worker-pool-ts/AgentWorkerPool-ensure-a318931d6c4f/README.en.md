# `AgentWorkerPool.ensure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715317-715346](../../../../../../reference/runtime/host-main.cjs#L715317-L715346) | `method` | yes | `agentId, blobDbPath, legacyBlobDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715317-715346](../../../../../../reference/runtime/host-main.cjs#L715317-L715346) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:715317

Calls written directly in this body: `connection.init`, `connection.pid`, `connection.threadId`, `new AgentWorkerConnection`, `this.connections.get`, `this.connections.set`, `this.evictForCapacity`, `this.options.reportHostLog`, `this.startSweep`.

SHA-256 of the source span: `8c42715544f015c92e544cca7c4dd01e8a69c6b8379ed1c9b16a9547acbf015c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
