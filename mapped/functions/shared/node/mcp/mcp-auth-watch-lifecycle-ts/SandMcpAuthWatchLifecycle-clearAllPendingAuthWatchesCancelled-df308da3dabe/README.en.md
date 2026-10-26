# `SandMcpAuthWatchLifecycle.clearAllPendingAuthWatchesCancelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686090-686094](../../../../../../../reference/runtime/host-main.cjs#L686090-L686094) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686090-686094](../../../../../../../reference/runtime/host-main.cjs#L686090-L686094) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:686090

Calls written directly in this body: `this.clearPendingAuthWatchCancelled`, `this.pendingAuthWatches.values`.

SHA-256 of the source span: `d09e57c966a63820b6d14578d0e2a18132ded08b3bcf98b0d2db4275d51a4860`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
