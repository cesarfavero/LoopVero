# `dispatchesSubagentDynamicTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/subagent-dynamic-tools.ts` · [Module README](../../../../../../modules/core/runner/subagents/subagent-dynamic-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587790-587797](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587790-L587797) | `FunctionDeclaration` | no | `gates, child` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587790-587797](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587790-L587797) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587790

Calls written directly in this body: `gates.subagentDynamicTools`, `isSandSubagentDynamicToolsKind`, `resolveSandAgentKind`.

SHA-256 of the source span: `fbbbbe14fdeaf6b58f4074cf41bda97172556b43f9f4fe41bc44d284bd3b4b32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
