# `SandMcpAuthWatchLifecycle.clearPendingAuthWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686025-686032](../../../../../../../reference/runtime/host-main.cjs#L686025-L686032) | `method` | no | `serverId, accountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686025-686032](../../../../../../../reference/runtime/host-main.cjs#L686025-L686032) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686025

Calls written directly in this body: `authWatchKey`, `this.pendingAuthWatches.delete`, `this.pendingAuthWatches.get`, `watch4.poll.dispose`.

SHA-256 of the source span: `09a73dfe4d243d32d387952e1f016cd47fb0f88509d9a9347ee5b866068fbb3b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
