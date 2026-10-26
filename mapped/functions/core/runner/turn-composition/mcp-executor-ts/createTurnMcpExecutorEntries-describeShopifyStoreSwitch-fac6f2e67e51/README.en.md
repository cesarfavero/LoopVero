# `createTurnMcpExecutorEntries/describeShopifyStoreSwitch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/turn-composition/mcp-executor.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/mcp-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:586006-586023](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586006-L586023) | `ArrowFunctionExpression` | yes | `result, providerIdentifier, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586006-586023](../../../../../../../reference/runtime/sand-eval-runner.cjs#L586006-L586023) | 3 | 0 | 1 | 4 | 0 | 1 |

### evaluation:586006

Calls written directly in this body: `errorLogTag`, `isShopifyStoreSwitch`, `new McpError`, `reportHostDiagnostic`, `resolveServerHost`, `surfaceNeedsAuthCard`, `turnToolHost.gates.shopifyStoreSwitchCard`.

SHA-256 of the source span: `bc46a4615dc20bb821c898d1e59390c675c554d5a72c4d46f194ac0ea007b08f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
