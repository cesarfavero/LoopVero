# `McpHostService.constructor/noteAuthCompletedElsewhere`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701579-701579](../../../../../../../reference/runtime/host-main.cjs#L701579-L701579) | `ArrowFunctionExpression` | no | `serverId, accountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701579-701579](../../../../../../../reference/runtime/host-main.cjs#L701579-L701579) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701579 uses an implicit arrow-function return.

### host:701579

Calls written directly in this body: `this.hostMcp.noteAuthCompletedElsewhere`.

SHA-256 of the source span: `7dae1d17910343c271e61a155224a861f22abf6ade9bf0f68879271187b50fd6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
