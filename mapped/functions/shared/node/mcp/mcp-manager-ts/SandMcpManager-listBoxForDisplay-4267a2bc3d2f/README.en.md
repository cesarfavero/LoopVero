# `SandMcpManager.listBoxForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689589-689614](../../../../../../../reference/runtime/host-main.cjs#L689589-L689614) | `method` | no | `boxRuntime, visible, isCurrent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689589-689614](../../../../../../../reference/runtime/host-main.cjs#L689589-L689614) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:689589

Calls written directly in this body: `.map`, `.then`, `stdioDisplayServers`, `this.listingCache.listBox`.

SHA-256 of the source span: `73edb9370cc2c612939bc66fad430cd08366d42ee286e4176061d9ea76b7be97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
