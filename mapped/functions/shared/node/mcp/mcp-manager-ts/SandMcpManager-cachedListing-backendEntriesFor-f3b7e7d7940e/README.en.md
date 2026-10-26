# `SandMcpManager.cachedListing/backendEntriesFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689530-689530](../../../../../../../reference/runtime/host-main.cjs#L689530-L689530) | `ArrowFunctionExpression` | no | `rowIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689530-689530](../../../../../../../reference/runtime/host-main.cjs#L689530-L689530) | 2 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:689530 uses an implicit arrow-function return.

### host:689530

Calls written directly in this body: `currentGenerationRows.has`, `this.listingCache.backendEntriesFor`, `this.listingCache.currentBackendEntriesFor`.

SHA-256 of the source span: `ddfb2d79d38bca931c23d48133652ca251974c8cbb1f2591768814e3377405e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
