# `AgentWorkerConnection.collectGarbage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715256-715266](../../../../../../reference/runtime/host-main.cjs#L715256-L715266) | `method` | yes | `retainedRootIdHex, pendingWriteRetentionMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715256-715266](../../../../../../reference/runtime/host-main.cjs#L715256-L715266) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:715256

Calls written directly in this body: `this.send`.

SHA-256 of the source span: `219643f359b17e27ab78e05f2a966356e069f9b0f14e7d53d319d16a32d29ab2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
