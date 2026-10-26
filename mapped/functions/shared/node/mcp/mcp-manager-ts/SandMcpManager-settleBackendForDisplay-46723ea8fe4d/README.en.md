# `SandMcpManager.settleBackendForDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689536-689556](../../../../../../../reference/runtime/host-main.cjs#L689536-L689556) | `method` | no | `visibleServers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689536-689556](../../../../../../../reference/runtime/host-main.cjs#L689536-L689556) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:689536

Calls written directly in this body: `.then`, `Promise.all`, `httpDisplayServers`, `httpServers.map`, `this.connectorAuth.read`, `this.listingCache.joinBackend`.

SHA-256 of the source span: `94f6a7cbc0e218f9490d418eb92dffc0b47e6a03033a19a6e1ac473ce9dfd7ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
