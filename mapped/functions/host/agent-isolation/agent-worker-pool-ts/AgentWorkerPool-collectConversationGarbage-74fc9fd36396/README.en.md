# `AgentWorkerPool.collectConversationGarbage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715396-715410](../../../../../../reference/runtime/host-main.cjs#L715396-L715410) | `method` | yes | `{     agentId,     blobDbPath,     retainedRootIdHex,     pendingWriteRetentionMs,     legacyBlobDbPath   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715396-715410](../../../../../../reference/runtime/host-main.cjs#L715396-L715410) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:715396

Calls written directly in this body: `connection.collectGarbage`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 of the source span: `30a65bd5686b82db787baf7b5b83e3b80c495cd69fa76b461e404fe0ce3b71c2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
