# `SandMcpListingCache.currentBoxServerFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688658-688661](../../../../../../../reference/runtime/host-main.cjs#L688658-L688661) | `method` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688658-688661](../../../../../../../reference/runtime/host-main.cjs#L688658-L688661) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:688658

Calls written directly in this body: `this.boxServersByIdentifier.get`.

SHA-256 of the source span: `b46d339ae6b44ce63a5ba260484a9efae2298057a1a53f10b4ee9aefb22a0855`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
