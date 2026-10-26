# `AgentWorkerPool.getConversationBlobsByHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715435-715443](../../../../../../reference/runtime/host-main.cjs#L715435-L715443) | `method` | yes | `{ agentId, blobDbPath, legacyBlobDbPath }, blobIdsHex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715435-715443](../../../../../../reference/runtime/host-main.cjs#L715435-L715443) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:715435

Calls written directly in this body: `connection.getBlobsByHexIds`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 of the source span: `f7325b1dc3af957f6428640d898211d61910fede3aff65daac666e32f97f7828`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
