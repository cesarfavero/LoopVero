# `createMcpToolsDiscovery/_resolveProviderTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/tools-discovery.ts` · [Module README](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:691193-691197](../../../../../../../reference/runtime/host-main.cjs#L691193-L691197) | `FunctionDeclaration` | yes | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691193-691197](../../../../../../../reference/runtime/host-main.cjs#L691193-L691197) | 2 | 0 | 2 | 3 | 0 | 0 |

### host:691193

Calls written directly in this body: `_isBoxStdioProvider`, `_isHttpProvider`.

SHA-256 of the source span: `6a44885e60bf6e2c9bc86110429bef91ce5fa1cf3dc7ebfe9e0970aeb2026144`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
