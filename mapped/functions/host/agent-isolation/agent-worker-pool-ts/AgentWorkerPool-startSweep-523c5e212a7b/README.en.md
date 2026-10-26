# `AgentWorkerPool.startSweep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715495-715501](../../../../../../reference/runtime/host-main.cjs#L715495-L715501) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715495-715501](../../../../../../reference/runtime/host-main.cjs#L715495-L715501) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:715495

Calls written directly in this body: `Number.isFinite`, `setInterval`, `timer.unref`.

Assignment or increment targets: `this.sweepTimer`.

SHA-256 of the source span: `9f58ee1cf77eb2367c32876d26a35ae064e067c048240cc2ee64414c0815f7cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
