# `SandMcpManager.listAfterPluginWrite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:689989-690041](../../../../../../../reference/runtime/host-main.cjs#L689989-L690041) | `method` | yes | `write4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689989-690041](../../../../../../../reference/runtime/host-main.cjs#L689989-L690041) | 6 | 0 | 3 | 4 | 0 | 0 |

### host:689989

Calls written directly in this body: `.catch`, `boxRuntime.isBoxExecWired`, `httpDisplayServers`, `httpServers.map`, `initializing.some`, `new Set`, `state.servers.filter`, `summarize`, `this.connectorAuth.read`, `this.listBoxForDisplay`, `this.listingCache.generationGuard`, `this.listingCache.joinRecentBackend`, `this.readVisibleDisplayServers`, `this.statusListingDeadline.run`, `visible.servers.flatMap`.

SHA-256 of the source span: `a1cc57cea69f1d8d4af097baf78fe7a1890876eea00d2987f2fbe8ca52ae3a14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
