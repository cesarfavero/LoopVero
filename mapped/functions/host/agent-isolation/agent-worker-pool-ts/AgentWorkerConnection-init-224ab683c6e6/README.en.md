# `AgentWorkerConnection.init`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715212-715224](../../../../../../reference/runtime/host-main.cjs#L715212-L715224) | `method` | yes | `boot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715212-715224](../../../../../../reference/runtime/host-main.cjs#L715212-L715224) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:715212

Calls written directly in this body: `this.send`.

Assignment or increment targets: `this.workerPid`, `this.workerThreadId`.

SHA-256 of the source span: `e8784d4cf7462de20fac1068d97b1d61069582e2184da97d01f9addce639b42e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
