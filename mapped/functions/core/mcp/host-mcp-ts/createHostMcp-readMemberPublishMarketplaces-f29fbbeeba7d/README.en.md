# `createHostMcp/readMemberPublishMarketplaces`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701336-701343](../../../../../../reference/runtime/host-main.cjs#L701336-L701343) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701336-701343](../../../../../../reference/runtime/host-main.cjs#L701336-L701343) | 0 | 0 | 1 | 1 | 0 | 1 |

### host:701336

Calls written directly in this body: `errorLogTag`, `log5`, `manager.getCatalog`, `manager.peekMemberPublishMarketplaces`.

SHA-256 of the source span: `92c9cd8ed84945c60d62fd8be0a6cb2df24345f498bed37df9135e6a3a19ed45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
