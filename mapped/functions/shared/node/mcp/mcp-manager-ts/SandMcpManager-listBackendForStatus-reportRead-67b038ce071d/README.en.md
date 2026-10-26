# `SandMcpManager.listBackendForStatus/reportRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689417-689427](../../../../../../../reference/runtime/host-main.cjs#L689417-L689427) | `ArrowFunctionExpression` | no | `outcome2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689417-689427](../../../../../../../reference/runtime/host-main.cjs#L689417-L689427) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:689417

Calls written directly in this body: `this.clock.now`, `this.listingObserver.onRead`.

SHA-256 of the source span: `0c19513435e8b4675acd4bc830b18404bbbbb92837082a24351b74212b2d8bf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
