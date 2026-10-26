# `SandMcpManager.constructor/clearPendingAuthWatch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689223-689223](../../../../../../../reference/runtime/host-main.cjs#L689223-L689223) | `ArrowFunctionExpression` | no | `serverId, accountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689223-689223](../../../../../../../reference/runtime/host-main.cjs#L689223-L689223) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:689223 uses an implicit arrow-function return.

### host:689223

Calls written directly in this body: `this.authWatches.clearPendingAuthWatchCancelled`.

SHA-256 of the source span: `7acd924467658de81b1940dbf41ac887e094593a4d3434ba5a850856d1ab5683`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
