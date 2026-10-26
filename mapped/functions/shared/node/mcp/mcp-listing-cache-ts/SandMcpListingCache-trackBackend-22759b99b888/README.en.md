# `SandMcpListingCache.trackBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688631-688633](../../../../../../../reference/runtime/host-main.cjs#L688631-L688633) | `method` | no | `serverIdentifiers, listing` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688631-688633](../../../../../../../reference/runtime/host-main.cjs#L688631-L688633) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:688631

Calls written directly in this body: `this.startBackendListing`.

SHA-256 of the source span: `88ef7d7730015e34c6f0e7c80eb97df166e9ba52e0e7ce0c9ebea517f1b6615d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
