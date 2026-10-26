# `AgentWorkerConnection.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715137-715165](../../../../../../reference/runtime/host-main.cjs#L715137-L715165) | `method` | no | `workerEntryPath, boot, onExit, reportHostLog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715137-715165](../../../../../../reference/runtime/host-main.cjs#L715137-L715165) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715137

Calls written directly in this body: `forwardStream`, `new import_node_worker_threads3.Worker`, `this.worker.on`.

Assignment or increment targets: `this.onExit`, `this.worker`.

SHA-256 of the source span: `06def730300c537b6815b9ca598dd56cdd13668c0886f375309bec17510636b9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
