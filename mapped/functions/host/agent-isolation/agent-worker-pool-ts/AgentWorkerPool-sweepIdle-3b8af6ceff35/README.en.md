# `AgentWorkerPool.sweepIdle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715507-715516](../../../../../../reference/runtime/host-main.cjs#L715507-L715516) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715507-715516](../../../../../../reference/runtime/host-main.cjs#L715507-L715516) | 3 | 1 | 0 | 0 | 0 | 0 |

### host:715507

Calls written directly in this body: `Date.now`, `connection.activityAt`, `connection.close`, `this.connections.delete`, `this.isRetained`, `this.stopSweep`.

SHA-256 of the source span: `2acf0523474e8b16b2813fad7ec1d0e689f8415f6e605c9d059e7bc98ade46d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
