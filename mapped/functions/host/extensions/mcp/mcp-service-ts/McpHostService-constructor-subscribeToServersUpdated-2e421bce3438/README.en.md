# `McpHostService.constructor/subscribeToServersUpdated`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701580-701585](../../../../../../../reference/runtime/host-main.cjs#L701580-L701585) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701580-701585](../../../../../../../reference/runtime/host-main.cjs#L701580-L701585) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:701580

Calls written directly in this body: `this.serversUpdatedListeners.add`.

SHA-256 of the source span: `78c1947535d9abb4dcf58fd01a98d9464e2086fb3f2d4aa59ea49e45aff6998f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
