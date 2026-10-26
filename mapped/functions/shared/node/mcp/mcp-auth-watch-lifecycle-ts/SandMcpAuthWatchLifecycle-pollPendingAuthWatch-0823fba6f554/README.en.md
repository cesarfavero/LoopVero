# `SandMcpAuthWatchLifecycle.pollPendingAuthWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686095-686114](../../../../../../../reference/runtime/host-main.cjs#L686095-L686114) | `method` | yes | `watchKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686095-686114](../../../../../../../reference/runtime/host-main.cjs#L686095-L686114) | 4 | 0 | 1 | 4 | 0 | 1 |

### host:686095

Calls written directly in this body: `this.deps.clock.now`, `this.expirePendingAuthWatch`, `this.pendingAuthWatches.get`, `this.settleLandedAuthWatch`.

Assignment or increment targets: `watch4.isPolling`, `watch4.suppressFirstPoll`.

SHA-256 of the source span: `f26f5aa0248c2e590791131ceb4c0e7f08de01fc40c7a65dff79635f26857d26`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
