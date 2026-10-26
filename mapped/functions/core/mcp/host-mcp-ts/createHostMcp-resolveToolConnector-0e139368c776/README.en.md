# `createHostMcp/resolveToolConnector`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701137-701140](../../../../../../reference/runtime/host-main.cjs#L701137-L701140) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701137-701140](../../../../../../reference/runtime/host-main.cjs#L701137-L701140) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701137 uses an implicit arrow-function return.

### host:701137

Calls written directly in this body: `discovery.providerDisplayServer`, `mcpToolConnectorTag`.

SHA-256 of the source span: `f1a1a208132241543782258a1102b8d588b3db79ac1533317344b48da362a561`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
