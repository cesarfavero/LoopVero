# `SandMcpManager.settleSignedInServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690200-690231](../../../../../../../reference/runtime/host-main.cjs#L690200-L690231) | `method` | no | `watch4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690200-690231](../../../../../../../reference/runtime/host-main.cjs#L690200-L690231) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:690200

Calls written directly in this body: `.then`, `Promise.all`, `findDisplayServerByAddress`, `httpDisplayServers`, `this.connectorAuth.read`, `this.displayListing.emitsUpdates`, `this.lastAccountDisplayConfigView`, `this.listingCache.listBackend`, `this.reloadDefinitions`, `this.signedInRowsAwaitingAccountRead.set`, `this.visibleServersOf`.

SHA-256 of the source span: `5b45fc357d75faefcc18beaf209c0850dad8bb8d34d21e5c6594494d7e863995`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
