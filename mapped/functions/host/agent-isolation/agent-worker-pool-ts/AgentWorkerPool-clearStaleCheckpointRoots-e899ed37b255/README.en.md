# `AgentWorkerPool.clearStaleCheckpointRoots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715387-715395](../../../../../../reference/runtime/host-main.cjs#L715387-L715395) | `method` | yes | `agentId, blobDbPath, retainedRootIdHex, legacyBlobDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715387-715395](../../../../../../reference/runtime/host-main.cjs#L715387-L715395) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:715387

Calls written directly in this body: `connection.clearStaleCheckpointRoots`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 of the source span: `3c5bce29075d5546254f6a16193185fb92aed4af4ddddd7a0ba5f06205a6396a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
