# `AgentWorkerConnection.send/<callback>/reject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715194-715197](../../../../../../reference/runtime/host-main.cjs#L715194-L715197) | `ArrowFunctionExpression` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715194-715197](../../../../../../reference/runtime/host-main.cjs#L715194-L715197) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:715194

Calls written directly in this body: `Date.now`, `reject2`.

Assignment or increment targets: `this.lastActivityAt`.

SHA-256 of the source span: `9a5682937285950075bc96451598c4fbd1a83238ff4b9f790b43bbf0820fa6d1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
