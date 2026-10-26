# `fetchPrivateMarketplaceSide`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-marketplace.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-marketplace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404677-404707](../../../../../../../reference/runtime/host-main.cjs#L404677-L404707) | `FunctionDeclaration` | yes | `client, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404677-404707](../../../../../../../reference/runtime/host-main.cjs#L404677-L404707) | 1 | 0 | 2 | 2 | 0 | 1 |

### host:404677

Calls written directly in this body: `Promise.all`, `client.listMarketplaces`, `lists.flat`, `marketplaces.map`, `memberPublishMarketplacesFrom`, `reportMcpHostEdgeFailure`, `response.marketplaces.filter`.

Assignment or increment targets: `marketplaces`.

SHA-256 of the source span: `24a6221729319b9b846f24ce8246864302f40f81ff90316cad2a9df26d138a22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
