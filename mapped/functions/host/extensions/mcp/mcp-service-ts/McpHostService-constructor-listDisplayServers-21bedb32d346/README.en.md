# `McpHostService.constructor/listDisplayServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701566-701569](../../../../../../../reference/runtime/host-main.cjs#L701566-L701569) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701566-701569](../../../../../../../reference/runtime/host-main.cjs#L701566-L701569) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701566

Calls written directly in this body: `kickInstallBackfillOnce`, `this.hostMcp.listServersForDisplay`.

SHA-256 of the source span: `748064a285f2d3205bcb6a4be5fa9142caa481bbecbe6cc8363ef599af067588`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
