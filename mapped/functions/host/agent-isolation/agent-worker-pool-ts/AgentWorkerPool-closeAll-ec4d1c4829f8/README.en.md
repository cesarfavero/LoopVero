# `AgentWorkerPool.closeAll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715451-715456](../../../../../../reference/runtime/host-main.cjs#L715451-L715456) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715451-715456](../../../../../../reference/runtime/host-main.cjs#L715451-L715456) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:715451

Calls written directly in this body: `Promise.all`, `all.map`, `this.connections.clear`, `this.connections.values`, `this.stopSweep`.

SHA-256 of the source span: `dff5c6ad922ac2b41c19e1710ee447bf62c0933894c5cec66025f1620609a369`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
