# `createMcpToolsDiscovery/_getDiscovered`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690836-690866](../../../../../../../reference/runtime/host-main.cjs#L690836-L690866) | `FunctionDeclaration` | yes | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690836-690866](../../../../../../../reference/runtime/host-main.cjs#L690836-L690866) | 9 | 0 | 5 | 7 | 0 | 0 |

### host:690836

Calls written directly in this body: `Date.now`, `_peekDiscoveryServerNames`, `_resolveColdThenAdopt`, `_startToolsResolution`, `_toolServerSetKey`.

SHA-256 of the source span: `420422691f5cdd7a5c6292bc835fe9871f4501543144543bdc9d9961d5a498b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
