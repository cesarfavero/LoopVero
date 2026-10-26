# `SandMcpConnectorAuthReader.latestFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-connector-auth-reader.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-connector-auth-reader-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686486-686488](../../../../../../../reference/runtime/host-main.cjs#L686486-L686488) | `method` | no | `serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686486-686488](../../../../../../../reference/runtime/host-main.cjs#L686486-L686488) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686486

Calls written directly in this body: `this.latest.get`.

SHA-256 of the source span: `d1dbf84560f472d2e8cfedced76138eb8af66a65c36229213fe5bd9a6105617f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
