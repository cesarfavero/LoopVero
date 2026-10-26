# `wrapDynamicInvocationToolWithTimeout/execute/createTimeoutError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554245-554248](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554245-L554248) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554245-554248](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554245-L554248) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:554245 uses an implicit arrow-function return.

### evaluation:554245

Calls written directly in this body: `createMcpPauseCancelledError`, `createToolCallExecutionTimeoutError`.

SHA-256 of the source span: `2753a02c095c6692c93b015c32c710e42c312e2913e5c03f05c2b3fc22c88252`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
