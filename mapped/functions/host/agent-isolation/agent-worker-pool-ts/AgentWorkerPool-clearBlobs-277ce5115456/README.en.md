# `AgentWorkerPool.clearBlobs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715378-715386](../../../../../../reference/runtime/host-main.cjs#L715378-L715386) | `method` | yes | `agentId, blobDbPath, legacyBlobDbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715378-715386](../../../../../../reference/runtime/host-main.cjs#L715378-L715386) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:715378

Calls written directly in this body: `connection.clearBlobs`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 of the source span: `1583ba1d20c139dfd940748e7c0961763f29add066e75b2bc234dfb8f07948e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
