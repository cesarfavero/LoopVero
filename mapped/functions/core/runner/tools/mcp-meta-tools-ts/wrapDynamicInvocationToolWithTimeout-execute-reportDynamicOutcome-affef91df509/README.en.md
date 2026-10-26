# `wrapDynamicInvocationToolWithTimeout/execute/reportDynamicOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554254-554266](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554254-L554266) | `ArrowFunctionExpression` | no | `outcome, error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554254-554266](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554254-L554266) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:554254

Calls written directly in this body: `Math.round`, `callSpan.end`, `dynamicToolCallErrorClass`, `observeDynamicToolCall`, `performance.now`.

SHA-256 of the source span: `b952cd2947bb3f0eeed8e3d00c27c3285a34b775f4bd64e65bd9069eeb24cb64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
