# `SandMcpConnectorAuthReader.read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-connector-auth-reader.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-connector-auth-reader-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686480-686485](../../../../../../../reference/runtime/host-main.cjs#L686480-L686485) | `method` | yes | `servers` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686480-686485](../../../../../../../reference/runtime/host-main.cjs#L686480-L686485) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:686480

Calls written directly in this body: `mcpOAuthAccountIdentifiers`, `this.fetch`.

Assignment or increment targets: `this.latest`, `this.readsStarted`.

SHA-256 of the source span: `8eb3c1538ea76d1b6319527dff4621e85c908380fa09bf4589b06e5f115d5ad5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
