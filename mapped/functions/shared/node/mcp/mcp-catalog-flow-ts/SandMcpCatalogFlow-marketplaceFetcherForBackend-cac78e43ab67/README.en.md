# `SandMcpCatalogFlow.marketplaceFetcherForBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-catalog-flow.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-catalog-flow-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686383-686395](../../../../../../../reference/runtime/host-main.cjs#L686383-L686395) | `method` | no | `fetchPlugins` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686383-686395](../../../../../../../reference/runtime/host-main.cjs#L686383-L686395) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686383

Calls written directly in this body: `invariant`, `marketplaceDashboardClientFor`.

SHA-256 of the source span: `36c12f32e4d208e1b3d394d80787613e677d8b70a547cfeb359a7726d04b7612`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
