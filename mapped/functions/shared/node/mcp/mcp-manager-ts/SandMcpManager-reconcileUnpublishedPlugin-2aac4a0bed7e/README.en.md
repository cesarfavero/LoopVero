# `SandMcpManager.reconcileUnpublishedPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689849-689853](../../../../../../../reference/runtime/host-main.cjs#L689849-L689853) | `method` | yes | `rawPluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689849-689853](../../../../../../../reference/runtime/host-main.cjs#L689849-L689853) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689849

Calls written directly in this body: `this.catalogFlow.reconcileUnpublishedPlugin`, `validateMarketplacePluginId`.

SHA-256 of the source span: `5a766380f6d8fb8ff27d9a045f60c88e19eaa6c36040df1481ed914ec4b53ace`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
