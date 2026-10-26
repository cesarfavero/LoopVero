# `SandMcpListingCache.dropBackend`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688671-688674](../../../../../../../reference/runtime/host-main.cjs#L688671-L688674) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688671-688674](../../../../../../../reference/runtime/host-main.cjs#L688671-L688674) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:688671

Calls written directly in this body: `this.backendEntriesByRow.clear`, `this.invalidate`.

SHA-256 of the source span: `dc759f0cc9d171d741f40c0deccca0adb058f4a27e198324700878c858b3baab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
