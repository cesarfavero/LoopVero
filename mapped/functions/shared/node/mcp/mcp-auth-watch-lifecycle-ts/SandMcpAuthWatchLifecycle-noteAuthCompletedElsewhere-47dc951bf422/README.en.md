# `SandMcpAuthWatchLifecycle.noteAuthCompletedElsewhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686054-686067](../../../../../../../reference/runtime/host-main.cjs#L686054-L686067) | `method` | no | `rawServerId, rawAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686054-686067](../../../../../../../reference/runtime/host-main.cjs#L686054-L686067) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:686054

Calls written directly in this body: `authWatchKey`, `isGrokDisplayServerId`, `normalizeAccountKey`, `this.clearPendingAuthWatch`, `this.pendingAuthWatches.get`, `validateMcpDisplayServerId`.

Assignment or increment targets: `accountKey`, `serverId`.

SHA-256 of the source span: `c27dbb95ee51d86c94d658881fb4bbc319d0009517a95ce76d247133017a0727`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
