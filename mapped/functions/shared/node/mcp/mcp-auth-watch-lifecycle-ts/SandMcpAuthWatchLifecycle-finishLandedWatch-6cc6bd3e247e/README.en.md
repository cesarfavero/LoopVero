# `SandMcpAuthWatchLifecycle.finishLandedWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686159-686167](../../../../../../../reference/runtime/host-main.cjs#L686159-L686167) | `method` | yes | `watch4, watchKey, via` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686159-686167](../../../../../../../reference/runtime/host-main.cjs#L686159-L686167) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:686159

Calls written directly in this body: `this.cancelWatchForWithdrawnRow`, `this.finishPendingAuthWatch`, `this.pendingAuthWatches.get`, `this.watchedRowWithdrawn`.

SHA-256 of the source span: `26101655c7ee6c744d85e9538b6cef494d4368bda90db6569dd2763219db3235`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
