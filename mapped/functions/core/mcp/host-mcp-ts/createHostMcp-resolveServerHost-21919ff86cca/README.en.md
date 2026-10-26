# `createHostMcp/resolveServerHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701142-701144](../../../../../../reference/runtime/host-main.cjs#L701142-L701144) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701142-701144](../../../../../../reference/runtime/host-main.cjs#L701142-L701144) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701142 uses an implicit arrow-function return.

### host:701142

Calls written directly in this body: `discovery.providerServerUrl`, `mcpPermissionServerHost`, `restMcpHost`.

SHA-256 of the source span: `ffc37759cbf1c641148ba27349b154d39e2f208726e35b3a6f057d64daecefa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
