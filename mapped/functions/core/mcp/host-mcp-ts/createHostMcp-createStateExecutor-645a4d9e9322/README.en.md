# `createHostMcp/createStateExecutor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/host-mcp.ts` · [Module README](../../../../../modules/core/mcp/host-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701117-701128](../../../../../../reference/runtime/host-main.cjs#L701117-L701128) | `ArrowFunctionExpression` | no | `mcpConfigJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701117-701128](../../../../../../reference/runtime/host-main.cjs#L701117-L701128) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701117 uses an implicit arrow-function return.

### host:701117

Calls written directly in this body: `createSandMcpStateExecutor`.

SHA-256 of the source span: `1b315d36f51d6ccd0683b401cbf5dc5f20c5f00df4961642064122696e49da42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
