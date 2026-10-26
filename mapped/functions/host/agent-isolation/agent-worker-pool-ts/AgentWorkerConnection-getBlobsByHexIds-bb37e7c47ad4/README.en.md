# `AgentWorkerConnection.getBlobsByHexIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715281-715286](../../../../../../reference/runtime/host-main.cjs#L715281-L715286) | `method` | yes | `blobIdsHex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715281-715286](../../../../../../reference/runtime/host-main.cjs#L715281-L715286) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:715281

Calls written directly in this body: `this.send`.

SHA-256 of the source span: `ebd2f1a2b1d4db4d7766df2fb12c670f8fc4e074c9ef1b50eaab0d6ece40a0e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
