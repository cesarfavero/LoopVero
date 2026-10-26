# `SandMcpAuthWatchLifecycle.watchListingSignIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685759-685780](../../../../../../../reference/runtime/host-main.cjs#L685759-L685780) | `method` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685759-685780](../../../../../../../reference/runtime/host-main.cjs#L685759-L685780) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:685759

Calls written directly in this body: `args.serverId.trim`, `args.serverIdentifier.trim`, `authWatchKey`, `cardOriginOf`, `this.beginPendingAuthWatch`, `this.pendingAuthWatches.has`, `this.rememberEntryPoint`.

SHA-256 of the source span: `c6a4ebcbe770863d0f6592aedd7de7de32fb55b837cfcc88637da6a920022b4f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
