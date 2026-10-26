# `createMcpToolsDiscovery/_invalidateToolsCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691101-691107](../../../../../../../reference/runtime/host-main.cjs#L691101-L691107) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691101-691107](../../../../../../../reference/runtime/host-main.cjs#L691101-L691107) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:691101

Calls written directly in this body: `.catch`, `_warmToolsCache`, `firstCallReported.clear`.

Assignment or increment targets: `toolsCacheEntry`, `toolsCacheEpoch`.

SHA-256 of the source span: `95ecbe22d85db8e8d2f22857f51d0b5269f4b2683186d3b181c279e49a19bc11`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
