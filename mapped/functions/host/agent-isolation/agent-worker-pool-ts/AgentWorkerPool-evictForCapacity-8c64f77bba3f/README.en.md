# `AgentWorkerPool.evictForCapacity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715478-715494](../../../../../../reference/runtime/host-main.cjs#L715478-L715494) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715478-715494](../../../../../../reference/runtime/host-main.cjs#L715478-L715494) | 5 | 1 | 0 | 3 | 0 | 0 |

### host:715478

Calls written directly in this body: `connection.activityAt`, `this.connections.delete`, `this.connections.get`, `this.isRetained`, `victim.close`.

Assignment or increment targets: `oldestActivity`, `victimPath`.

SHA-256 of the source span: `ac7867b5908ae06f8d6e108b4ce4208e6a7e210d389515b44fd395c52e8ba6ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
