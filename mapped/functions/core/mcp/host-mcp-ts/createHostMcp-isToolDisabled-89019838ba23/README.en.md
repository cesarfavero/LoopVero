# `createHostMcp/isToolDisabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701152-701152](../../../../../../reference/runtime/host-main.cjs#L701152-L701152) | `ArrowFunctionExpression` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701152-701152](../../../../../../reference/runtime/host-main.cjs#L701152-L701152) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701152 uses an implicit arrow-function return.

### host:701152

Calls written directly in this body: `discovery.isToolDisabled`.

SHA-256 of the source span: `b244d8245f26d9d0a825dd55f54b2b4afd4c924964781cef3e061d0d7226ce5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
