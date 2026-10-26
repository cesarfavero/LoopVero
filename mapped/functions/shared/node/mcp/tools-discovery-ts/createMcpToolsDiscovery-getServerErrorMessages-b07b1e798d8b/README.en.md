# `createMcpToolsDiscovery/_getServerErrorMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690810-690812](../../../../../../../reference/runtime/host-main.cjs#L690810-L690812) | `FunctionDeclaration` | yes | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690810-690812](../../../../../../../reference/runtime/host-main.cjs#L690810-L690812) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:690810

Calls written directly in this body: `_getDiscovered`.

SHA-256 of the source span: `7a5485ab36a1dfd47dc6e1c8e228f25f7fc327e98a3444681f4f6b71363289d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
