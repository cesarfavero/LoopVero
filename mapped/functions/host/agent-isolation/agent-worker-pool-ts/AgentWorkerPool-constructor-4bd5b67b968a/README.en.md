# `AgentWorkerPool.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715300-715307](../../../../../../reference/runtime/host-main.cjs#L715300-L715307) | `method` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715300-715307](../../../../../../reference/runtime/host-main.cjs#L715300-L715307) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715300

Calls written directly in this body: `defaultWorkerEntryPath2`.

Assignment or increment targets: `this.busyTimeoutMs`, `this.idleTimeoutMs`, `this.maxWorkers`, `this.options`, `this.sweepIntervalMs`, `this.workerEntryPath`.

SHA-256 of the source span: `6a00c39326dce6cf744c812965f30bf31bb5d3d5e935a22c144c7a5da725af56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
