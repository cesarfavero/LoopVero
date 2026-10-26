# `createMcpManagementTools/reportMarketplaceSearch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780192-780201](../../../../../../../reference/runtime/host-main.cjs#L780192-L780201) | `ArrowFunctionExpression` | no | `ctx, query2, plugins, recall2` |
| [evaluation:580437-580446](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580437-L580446) | `ArrowFunctionExpression` | no | `ctx, query2, plugins, recall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780192-780201](../../../../../../../reference/runtime/host-main.cjs#L780192-L780201) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:580437-580446](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580437-L580446) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:780192

Calls written directly in this body: `boundMarketplaceSearch`, `ctx.get`, `getRequestingAgentId`, `options2.getTranscriptId`, `options2.onMarketplaceSearch`, `plugins.map`.

SHA-256 of the source span: `baf401f7468e540a3e6fbb31837051f0408cfc2dad1330cf9ef950e82a98ffc9`.

### evaluation:580437

Calls written directly in this body: `boundMarketplaceSearch`, `ctx.get`, `getRequestingAgentId`, `options2.getTranscriptId`, `options2.onMarketplaceSearch`, `plugins.map`.

SHA-256 of the source span: `4007be92d5350380e07fc862812a57ba3845f17b31ebb582d949177d30c94461`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
