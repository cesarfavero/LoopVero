# `withDynamicToolCallSpan/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761867-761881](../../../../../../../reference/runtime/host-main.cjs#L761867-L761881) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:554141-554155](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554141-L554155) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761867-761881](../../../../../../../reference/runtime/host-main.cjs#L761867-L761881) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:554141-554155](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554141-L554155) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:761867

Calls written directly in this body: `callSpan.end`, `dynamicToolCallErrorClass`, `isIntentionalAbortReason2`, `startDynamicToolCallSpan`, `tool.execute`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `7d4485635efe7901e01fe4f4a930be3c5b341f8c6ba465228ddc9b1d8f612eb1`.

### evaluation:554141

Calls written directly in this body: `callSpan.end`, `dynamicToolCallErrorClass`, `isIntentionalAbortReason2`, `startDynamicToolCallSpan`, `tool.execute`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `a8ac02efe0dda9845b97f541dd5aa88a124c4c68cbbadfe40b7048a778445b1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
