# `fetchMarketplaceMcpPlugins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404551-404551](../../../../../../../reference/runtime/host-main.cjs#L404551-L404551) | `ArrowFunctionExpression` | no | `(none)` |
| [host:404708-404747](../../../../../../../reference/runtime/host-main.cjs#L404708-L404747) | `FunctionDeclaration` | yes | `getAccessToken, getMachineId, createClient2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404551-404551](../../../../../../../reference/runtime/host-main.cjs#L404551-L404551) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:404551 uses an implicit arrow-function return.
| [host:404708-404747](../../../../../../../reference/runtime/host-main.cjs#L404708-L404747) | 2 | 2 | 1 | 1 | 0 | 0 |

### host:404551

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `6aa4f527c9558646a7c8037cfb847441dadb02de3ec15f5dbe9b6abb30d35c1f`.

### host:404708

Calls written directly in this body: `.catch`, `.then`, `Promise.all`, `add2`, `bestEffortToken`, `byPluginId.values`, `client.listMarketplacePlugins`, `createClient2`, `listingSupersededPopularityRanksFrom`, `new AbortController`, `new Map`, `plugins.sort`.

SHA-256 of the source span: `f8e4e3b670bf9db6e53379209f4c6e703a92c7803e585bdb510be5a37374bb81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
