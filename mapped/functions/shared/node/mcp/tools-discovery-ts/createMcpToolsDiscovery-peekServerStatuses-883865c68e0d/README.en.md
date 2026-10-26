# `createMcpToolsDiscovery/_peekServerStatuses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690804-690809](../../../../../../../reference/runtime/host-main.cjs#L690804-L690809) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690804-690809](../../../../../../../reference/runtime/host-main.cjs#L690804-L690809) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:690804

Calls written directly in this body: `_currentDiscoveredForKey`, `_peekDiscoveryServerNames`, `_toolServerSetKey`, `_withRowIdentityStatuses`.

SHA-256 of the source span: `895034246426712500ef0f54b35a3d4324894eb5f953fa4c3a94a605c03ba08f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
