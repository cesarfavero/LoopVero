# `SandMcpManager.listAfterPluginWrite/summarize`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-manager.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:690006-690022](../../../../../../../reference/runtime/host-main.cjs#L690006-L690022) | `ArrowFunctionExpression` | no | `settled2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690006-690022](../../../../../../../reference/runtime/host-main.cjs#L690006-L690022) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:690006

Calls written directly in this body: `this.cachedListing`, `this.summarizeServers`.

SHA-256 of the source span: `585e244c314a2180d71154317f7f1380d39af0e034e3bed05d8037bba6d2e9df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
