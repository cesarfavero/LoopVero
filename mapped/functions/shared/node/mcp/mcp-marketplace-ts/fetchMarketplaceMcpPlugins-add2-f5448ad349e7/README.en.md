# `fetchMarketplaceMcpPlugins/add2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404724-404731](../../../../../../../reference/runtime/host-main.cjs#L404724-L404731) | `ArrowFunctionExpression` | no | `plugin, fromPrivateMarketplace = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404724-404731](../../../../../../../reference/runtime/host-main.cjs#L404724-L404731) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:404724

Calls written directly in this body: `byPluginId.set`, `toSandMarketplacePlugin`.

SHA-256 of the source span: `08885d7fb512a5937f09456a6307ddcb8830082299546b9074d21d66371fe383`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
