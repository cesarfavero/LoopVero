# `createMcpAppEmitter/observeToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/mcp-app/mcp-app-emitter.ts` · [Module README](../../../../../../modules/core/runner/mcp-app/mcp-app-emitter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585441-585453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585441-L585453) | `FunctionDeclaration` | yes | `event, callId, toolCall2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585441-585453](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585441-L585453) | 7 | 0 | 1 | 6 | 0 | 0 |

### evaluation:585441

Calls written directly in this body: `emitWhenApp`, `observedCallIds.add`, `observedCallIds.has`.

SHA-256 of the source span: `1311d032bf2663dedbd11d68977a1007e1796d8fb02b735a4d248f3bad07479c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
