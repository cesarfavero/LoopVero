# `withPushedStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-display-listing.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-display-listing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686821-686833](../../../../../../../reference/runtime/host-main.cjs#L686821-L686833) | `FunctionDeclaration` | no | `server, pushed, toolCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686821-686833](../../../../../../../reference/runtime/host-main.cjs#L686821-L686833) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686821

Calls written directly in this body: `statusFromMcpRawServerStatus`.

SHA-256 of the source span: `518a4cc5b0457175e39b717531ac01a3829f89cfd328753785404d63e77227f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
