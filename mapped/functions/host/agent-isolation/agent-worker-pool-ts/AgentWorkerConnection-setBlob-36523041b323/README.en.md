# `AgentWorkerConnection.setBlob`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715225-715232](../../../../../../reference/runtime/host-main.cjs#L715225-L715232) | `method` | yes | `blobId, blobData` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715225-715232](../../../../../../reference/runtime/host-main.cjs#L715225-L715232) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:715225

Calls written directly in this body: `this.send`.

SHA-256 of the source span: `3f9c946e144c72a26ad1aebd385d5c0b2a03b667f2ef34bf14006ac82c7145be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
