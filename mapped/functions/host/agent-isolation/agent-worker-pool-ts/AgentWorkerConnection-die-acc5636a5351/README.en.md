# `AgentWorkerConnection.die`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715174-715180](../../../../../../reference/runtime/host-main.cjs#L715174-L715180) | `method` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715174-715180](../../../../../../reference/runtime/host-main.cjs#L715174-L715180) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:715174

Calls written directly in this body: `entry.reject`, `this.onExit`, `this.pending.clear`.

Assignment or increment targets: `this.isDead`.

SHA-256 of the source span: `71bc816a072043e984cfe8c78c342a07b7dfe7e5d770264a4a600e51b0019c2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
