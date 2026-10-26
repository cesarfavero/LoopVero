# `McpHostService.constructor/listServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701561-701564](../../../../../../../reference/runtime/host-main.cjs#L701561-L701564) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701561-701564](../../../../../../../reference/runtime/host-main.cjs#L701561-L701564) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701561

Calls written directly in this body: `kickInstallBackfillOnce`, `this.hostMcp.plugins.listServers`.

SHA-256 of the source span: `24a72ffb40680e80d211ea78bb8223e16c18255e0ef25594261abb87c9b85aaa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
