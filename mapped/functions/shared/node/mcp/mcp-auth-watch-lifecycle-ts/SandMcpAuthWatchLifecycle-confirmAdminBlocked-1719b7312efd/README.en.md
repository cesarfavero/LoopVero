# `SandMcpAuthWatchLifecycle.confirmAdminBlocked`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685850-685871](../../../../../../../reference/runtime/host-main.cjs#L685850-L685871) | `method` | yes | `attempt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685850-685871](../../../../../../../reference/runtime/host-main.cjs#L685850-L685871) | 1 | 1 | 2 | 3 | 0 | 2 |

### host:685850

Calls written directly in this body: `reportMcpHostEdgeFailure`, `this.clearPendingAuthWatchesForServer`, `this.deps.reload`, `this.deps.resolveDisplayServer`, `this.notifyWatchCancelled`.

Assignment or increment targets: `fresh`.

SHA-256 of the source span: `68798e91abd19e3e05343ddf40fb0ff1c58e840d08ff48d02566dcf38cd9aa6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
