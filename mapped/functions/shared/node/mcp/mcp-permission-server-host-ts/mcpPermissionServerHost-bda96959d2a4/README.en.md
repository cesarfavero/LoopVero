# `mcpPermissionServerHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-permission-server-host.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-permission-server-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:688419-688427](../../../../../../../reference/runtime/host-main.cjs#L688419-L688427) | `FunctionDeclaration` | no | `url2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688419-688427](../../../../../../../reference/runtime/host-main.cjs#L688419-L688427) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:688419

Calls written directly in this body: `.hostname.toLowerCase`, `URL.canParse`, `getRestMcpProviderIdForUrlOnHost`, `new URL`.

SHA-256 of the source span: `362890f834e060ff746935882abb9f9665543f16e482529e2a8b76b91eaee1f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
