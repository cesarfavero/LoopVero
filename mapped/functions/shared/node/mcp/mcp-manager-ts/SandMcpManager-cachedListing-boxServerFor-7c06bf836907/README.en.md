# `SandMcpManager.cachedListing/boxServerFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689531-689531](../../../../../../../reference/runtime/host-main.cjs#L689531-L689531) | `ArrowFunctionExpression` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689531-689531](../../../../../../../reference/runtime/host-main.cjs#L689531-L689531) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:689531 uses an implicit arrow-function return.

### host:689531

Calls written directly in this body: `currentGenerationRows.has`, `this.listingCache.boxServerFor`, `this.listingCache.currentBoxServerFor`, `unlistedBoxServer`.

SHA-256 of the source span: `8c185bc02e6e56a98837a6db5df65588aa48d9dd0abe4c0dba157f79af811a0a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
