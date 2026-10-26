# `SandMcpManager.sharedListingBackendMcpExecView/listTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689334-689341](../../../../../../../reference/runtime/host-main.cjs#L689334-L689341) | `ArrowFunctionExpression` | yes | `serverIdentifiers, mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689334-689341](../../../../../../../reference/runtime/host-main.cjs#L689334-L689341) | 2 | 0 | 2 | 2 | 1 | 0 |

### host:689334

Calls written directly in this body: `this.backendMcpExec.listTools`, `this.listingCache.joinBackend`.

Explicit throw targets: `outcome.error`.

SHA-256 of the source span: `b7fb770894547d75eaf0abe54e77245ea00120a2c2c4694672cd3cbd826e85a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
