# `McpHostService.constructor/kickInstallBackfillOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/mcp-service.ts` · [Module README](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701547-701555](../../../../../../../reference/runtime/host-main.cjs#L701547-L701555) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701547-701555](../../../../../../../reference/runtime/host-main.cjs#L701547-L701555) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:701547

Calls written directly in this body: `.then`, `backfillUserPluginInstalls`.

Assignment or increment targets: `this.installBackfill`.

SHA-256 of the source span: `bde604c4d056aa6cfe80c0f53c2cc504a7a3c36f3319ec0ea1005b3da4fd3303`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
