# `SandMcpAuthWatchLifecycle.settleListingTransitionWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686148-686158](../../../../../../../reference/runtime/host-main.cjs#L686148-L686158) | `method` | yes | `watch4, watchKey, tokenLanded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686148-686158](../../../../../../../reference/runtime/host-main.cjs#L686148-L686158) | 4 | 0 | 2 | 3 | 0 | 0 |

### host:686148

Calls written directly in this body: `this.clearPendingAuthWatch`, `this.finishLandedWatch`, `this.listingSignInState`, `this.pendingAuthWatches.get`.

SHA-256 of the source span: `f7904a6a3911f7845beda3b2adc226e0bc56af388eb7cc19a9ab6e8643bb13ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
