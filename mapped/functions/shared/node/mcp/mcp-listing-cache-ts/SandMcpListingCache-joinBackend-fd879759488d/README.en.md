# `SandMcpListingCache.joinBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688614-688620](../../../../../../../reference/runtime/host-main.cjs#L688614-L688620) | `method` | no | `serverIdentifiers, caller` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688614-688620](../../../../../../../reference/runtime/host-main.cjs#L688614-L688620) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688614

Calls written directly in this body: `backendListingKey`, `this.startBackendListing`.

SHA-256 of the source span: `6cec822856ae53d5c9acc99e0fed35d772b98287129c9431a5e2837ef3726329`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
