# `createMcpAppEmitter/emitWhenApp`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585454-585490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585454-L585490) | `FunctionDeclaration` | yes | `callId, providerIdentifier, toolName, mcpCall` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585454-585490](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585454-L585490) | 10 | 0 | 2 | 2 | 0 | 0 |

### evaluation:585454

Calls written directly in this body: `allowedAppResourceUri`, `capturePage`, `deps.emitUpdate`, `deps.mcpConfigJson`, `deps.resolveServerName`, `encodeBounded`, `lookUpTool`, `mcpAppToolResultPayload`, `observedCallIds.delete`, `toolArgumentsOf`.

SHA-256 of the source span: `d42bec40795918d558c40125b7b19ea1b7da46e4cbc40aa4041979e0d041ce2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
