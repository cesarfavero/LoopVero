# `SandMcpListingCache.clear`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-cache.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688675-688678](../../../../../../../reference/runtime/host-main.cjs#L688675-L688678) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688675-688678](../../../../../../../reference/runtime/host-main.cjs#L688675-L688678) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:688675

Calls written directly in this body: `this.boxServersByIdentifier.clear`, `this.dropBackend`.

SHA-256 of the source span: `b72c21be9084791cc064afd595a4873ff65d224e9549fa5d69c3b7a5f8ec656c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
