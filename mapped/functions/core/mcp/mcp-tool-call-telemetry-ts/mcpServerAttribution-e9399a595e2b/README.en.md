# `mcpServerAttribution`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/mcp-tool-call-telemetry.ts` · [Module README](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693336-693345](../../../../../../reference/runtime/host-main.cjs#L693336-L693345) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693336-693345](../../../../../../reference/runtime/host-main.cjs#L693336-L693345) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:693336

Calls written directly in this body: `MARKETPLACE_PLUGIN_ID.test`, `isGrokServedServer`.

SHA-256 of the source span: `79bf5d110ea7a62585c738f3a4fb5bf2255296680334562b4bc3e4bf30786adf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
