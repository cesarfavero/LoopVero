# `isBackendRefusalDetail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-listing-summaries.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688771-688773](../../../../../../../reference/runtime/host-main.cjs#L688771-L688773) | `FunctionDeclaration` | no | `detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688771-688773](../../../../../../../reference/runtime/host-main.cjs#L688771-L688773) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:688771

Calls written directly in this body: `isMcpNetworkAllowlistRefusalDetail`, `isMcpTailnetRefusalDetail`.

SHA-256 of the source span: `81688b3d19b64f6ca7da5487b22eabe5144450ecd8af22389f769bf5f8235e34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
