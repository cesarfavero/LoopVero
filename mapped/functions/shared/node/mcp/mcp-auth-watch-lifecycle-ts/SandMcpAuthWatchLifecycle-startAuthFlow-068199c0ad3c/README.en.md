# `SandMcpAuthWatchLifecycle.startAuthFlow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:685899-685945](../../../../../../../reference/runtime/host-main.cjs#L685899-L685945) | `method` | yes | `attempt, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685899-685945](../../../../../../../reference/runtime/host-main.cjs#L685899-L685945) | 5 | 0 | 1 | 2 | 0 | 0 |

### host:685899

Calls written directly in this body: `pendingAuthWatchArgs`, `this.beginPendingAuthWatch`, `this.clearPendingAuthWatchCancelled`, `this.emit`, `this.failWithoutLink`, `this.reportFlowStartRefused`, `validateAuthorizationUrl`.

SHA-256 of the source span: `355977cd522af2d2c613e728be2244beea441896b3f4a144fd16c92f38e01c55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
